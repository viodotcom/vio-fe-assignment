import { 
  SearchRequest, 
  SearchResponse,
  ApiError 
} from '../types/api';

const VIO_API_BASE_URL = "https://partners.api.vio.com/v1";

interface ApiConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
}

class VioApiClient {
  private apiKey: string;
  private baseUrl: string;
  private timeout: number;

  constructor(config: ApiConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || VIO_API_BASE_URL;
    this.timeout = config.timeout || 30000;
  }

  private async makeRequest<T>(
    endpoint: string, 
    method: 'GET' | 'POST' = 'GET', 
    body?: unknown
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: Record<string, string> = {
      'X-Partner-Key': this.apiKey,
      'Accept-Encoding': 'gzip, deflate, br',
    };

    if (method === 'POST') {
      headers['Content-Type'] = 'application/json';
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const fetchOptions: RequestInit = {
        method,
        headers,
        signal: controller.signal,
      };

      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }

      const response = await fetch(url, fetchOptions);

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new ApiError(
          `API request failed: ${response.status} ${response.statusText}`,
          response.status,
          errorText
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timeout', 408);
      }
      
      throw new ApiError(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Search for hotels and offers by various criteria
   */
  async search(params: SearchRequest): Promise<SearchResponse> {
    return this.makeRequest<SearchResponse>('/search', 'POST', params);
  }
}

export default VioApiClient;
