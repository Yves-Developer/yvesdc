import { Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-end h-full w-full">
      <span className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full ">
        <Link href="https://github.com/Yves-Developer" target="_blank">
          <Github />
        </Link>
      </span>
      <span className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full ">
        <Link href="mailto:yvesmugisha09@gmail.com">
          <Mail />
        </Link>
      </span>
      <span className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full ">
        <Link href="https://www.instagram.com/yves_dc1" target="_blank">
          <Instagram />
        </Link>
      </span>
      <span className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full ">
        <Link href="https://www.x.com/YvesDC0" target="_blank">
          <Twitter />
        </Link>
      </span>
      <span className="h-32 w-[2px] bg-textLight" />
    </div>
  );
};

export default LeftSide;
