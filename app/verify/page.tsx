// app/page.tsx
"use client";

import { useState } from "react";

export default function Page() {
  const [employeeId, setEmployeeId] = useState("");

  const handleSetCookie = () => {
    if (!employeeId) return;
    // Set cookie for 7 days
    document.cookie = `employeeId=${employeeId}; path=/; max-age=${7 * 24 * 60 * 60}`;
    alert("Cookie set!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleSetCookie} style={{ marginLeft: "1rem" }}>
        Set Cookie
      </button>
    </div>
  );
}
