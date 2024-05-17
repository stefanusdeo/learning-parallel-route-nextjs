import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/lib/news-dummy";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const datas = DUMMY_NEWS;
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={datas} />
    </>
  );
}
