import Link from "next/link";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive (Parallel Route)</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
