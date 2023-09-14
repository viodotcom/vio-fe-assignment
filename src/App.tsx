import viodotcomLogo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vio.com" target="_blank">
          <img src={viodotcomLogo} className="logo" alt="Vio.com logo" />
        </a>
      </div>
      <h1>Vio.com</h1>
      <p>Frontend Engineer Assignment</p>
    </>
  );
}

export default App;
