import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React from "react";

export default function page(props) {
  const filter = props.params.filter;
  const yearSelected = filter?.[0];
  const monthSelected = filter?.[1];

  let data;
  let links = getAvailableNewsYears();

  if (yearSelected && !monthSelected) {
    data = getNewsForYear(yearSelected);
    links = getAvailableNewsMonths(yearSelected);
  }

  if (yearSelected && monthSelected) {
    data = getNewsForYearAndMonth(yearSelected, monthSelected);
    links = [];
  }

  let newsContent = <p>No News Found</p>;

  if (data && data.length > 0) {
    newsContent = <NewsList news={data} />;
  }

  if (
    (yearSelected && !getAvailableNewsYears().includes(+yearSelected)) ||
    (monthSelected &&
      !getAvailableNewsMonths(yearSelected).includes(+monthSelected))
  ) {
    throw new Error("Invalid Filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((data, i) => {
              const href = yearSelected
                ? `/archive/${yearSelected}/${data}`
                : `/archive/${data}`;
              return (
                <li key={i}>
                  <Link href={`${href}`}>{data}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
