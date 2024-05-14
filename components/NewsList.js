import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((data, i) => (
        <li key={i}>
          <Link href={`/news/${data.slug}`}>
            <Image
              src={`/images/news/${data.image}`}
              width={100}
              height={100}
              alt={`${data.title}`}
            />
            <span>{data.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
