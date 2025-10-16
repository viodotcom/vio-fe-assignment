"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card, { CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import DatePicker from "@/components/ui/DatePicker";

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI Components Library
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            A collection of reusable UI components built with React and Tailwind
            CSS.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Button Component
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Button Variants</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" size="sm">
                      Small
                    </Button>
                    <Button variant="primary" size="md">
                      Medium
                    </Button>
                    <Button variant="primary" size="lg">
                      Large
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary" disabled>
                      Disabled
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => alert("Button clicked!")}
                    >
                      Clickable
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Button Props</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    <strong>variant:</strong> "primary" | "secondary" |
                    "outline"
                  </div>
                  <div>
                    <strong>size:</strong> "sm" | "md" | "lg"
                  </div>
                  <div>
                    <strong>disabled:</strong> boolean
                  </div>
                  <div>
                    <strong>onClick:</strong> () =&gt; void
                  </div>
                  <div>
                    <strong>className:</strong> string
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Input Component
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Input Examples</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <Input
                    placeholder="Enter text here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Input type="email" placeholder="Enter email" />
                  <Input type="password" placeholder="Enter password" />
                  <Input placeholder="Disabled input" disabled />
                  <Input placeholder="Required field" required />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Input Props</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    <strong>type:</strong> "text" | "email" | "password" |
                    "number" | "tel"
                  </div>
                  <div>
                    <strong>placeholder:</strong> string
                  </div>
                  <div>
                    <strong>value:</strong> string
                  </div>
                  <div>
                    <strong>onChange:</strong> (e: ChangeEvent) =&gt; void
                  </div>
                  <div>
                    <strong>disabled:</strong> boolean
                  </div>
                  <div>
                    <strong>required:</strong> boolean
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Card Component
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Card Variants</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <Card variant="default" size="sm" className="p-4">
                    <p className="text-sm">Default Card</p>
                  </Card>
                  <Card variant="outlined" size="sm" className="p-4">
                    <p className="text-sm">Outlined Card</p>
                  </Card>
                  <Card variant="elevated" size="sm" className="p-4">
                    <p className="text-sm">Elevated Card</p>
                  </Card>
                  <Card variant="filled" size="sm" className="p-4">
                    <p className="text-sm">Filled Card</p>
                  </Card>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">
                  Card with Sub-components
                </h3>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardHeader>
                    <h4 className="font-semibold">Card Header</h4>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-800">
                      This is the card body content.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button variant="primary" size="sm">
                      Action
                    </Button>
                  </CardFooter>
                </Card>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            DatePicker Component
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">DatePicker Examples</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <DatePicker
                    placeholder="Select a date"
                    value={dateValue}
                    onChange={setDateValue}
                  />
                  <DatePicker
                    placeholder="With min/max dates"
                    minDate="2024-01-01"
                    maxDate="2024-12-31"
                  />
                  <DatePicker placeholder="Disabled date picker" disabled />
                  <DatePicker placeholder="Required field" required />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">DatePicker Props</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    <strong>value:</strong> string
                  </div>
                  <div>
                    <strong>onChange:</strong> (date: string) =&gt; void
                  </div>
                  <div>
                    <strong>minDate:</strong> string
                  </div>
                  <div>
                    <strong>maxDate:</strong> string
                  </div>
                  <div>
                    <strong>disabled:</strong> boolean
                  </div>
                  <div>
                    <strong>required:</strong> boolean
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
