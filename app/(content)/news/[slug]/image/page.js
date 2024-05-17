import { DUMMY_NEWS } from "@/lib/news-dummy";
import { notFound } from "next/navigation";
import React from "react";

export default function page({ params }) {
  const newsSlug = params.slug;
  const data = DUMMY_NEWS.find((item) => item.slug === newsSlug);
  if (!data) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${data.image}`} alt={data.title} />
    </div>
  );
}
