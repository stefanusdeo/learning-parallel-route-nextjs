import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default function page() {
  const data = getLatestNews();
  return (
    <>
      <h2>Lastest News</h2>
      <NewsList news={data} />
    </>
  );
}
