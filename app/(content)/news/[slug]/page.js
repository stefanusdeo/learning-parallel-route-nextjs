import { DUMMY_NEWS } from "@/lib/news-dummy";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default function page(props) {
  const data = DUMMY_NEWS.find((item) => item.slug === props.params.slug);
  if (!data) notFound();
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${data.slug}/image`}>
          <Image
            src={`/images/news/${data.image}`}
            width={100}
            height={100}
            alt={`${data.title}`}
          />
        </Link>
        <h1>{data.title}</h1>
        <time>{data.date}</time>
      </header>
      <p>{data.content}</p>
    </article>
  );
}
