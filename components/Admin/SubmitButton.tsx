"use client";
import React from "react";

export default function CollectionButton() {
  const handleCollection = async (e: any) => {
    e.preventDefault();
    alert("OK");
  };
  return (
    <button
      onClick={handleCollection}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      Submit
    </button>
  );
}
