"use client";
import { useState } from "react";

export default function Home() {
  const [x, setX] = useState<string>("");

  const num = Number(x);

  const multipliers = [
    { label: "+ 3%", value: 1.03 },
    { label: "- 3%", value: 0.97 },
    { label: "- 10%", value: 0.9 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col gap-5 w-full max-w-sm">

        <label className="text-base font-medium">Input X</label>

        <input
          type="number"
          value={x}
          onChange={(e) => setX(e.target.value)}
          placeholder="Enter a number"
          className="border rounded-lg px-4 py-3 text-lg no-spinner"
        />

        {multipliers.map((m) => (
          <div key={m.value} className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              X {m.label}
            </label>

            <input
              readOnly
              value={x ? num * m.value : ""}
              className="border rounded-lg px-4 py-3 text-lg bg-gray-100"
            />
          </div>
        ))}

      </div>
    </div>
  );
}