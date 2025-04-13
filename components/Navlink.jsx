/** @format */
import Link from "next/link";
import { motion } from "framer-motion";
function NavLink({ href, title, onClick, target, index }) {
  return (
    <Link
      href={href}
      className="relative text-textDark transition-colors hover:text-primary font-medium px-4 py-2"
      onClick={onClick}
      target={target || "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: index * 0.1 }}
      >
        {title}
      </motion.div>
    </Link>
  );
}

export default NavLink;
