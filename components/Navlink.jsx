/** @format */
import Link from "next/link";
function NavLink({ href, title, onClick }) {
  return (
    <Link
      href={href}
      className="relative text-foreground/60 transition-colors hover:text-foreground/80 px-4 py-2"
      onClick={onClick}
    >
      {title}
    </Link>
  );
}

export default NavLink;
