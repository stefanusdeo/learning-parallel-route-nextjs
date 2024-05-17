"use client";
import React from "react";

export default function error({ error }) {
  return (
    <>
      <h1>Somthing Error</h1>
      <p>{error.message}</p>
    </>
  );
}
