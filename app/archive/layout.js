import React from "react";

export default function layout({ archive, lastest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section className="archive-filter">{archive}</section>
      <section className="archive-lastest">{lastest}</section>
    </div>
  );
}
