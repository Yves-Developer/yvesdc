'use client';
import Link from 'next/link';


const Navlink = ({ href, title }) => {

  return (
    <Link href={href} className={`px-4 py-2 text-primary hover:text-gray-300`}>
        {title}
    </Link>
  );
};

export default Navlink;