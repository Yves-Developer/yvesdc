import { Github, Instagram, Mail } from "lucide-react";

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-end h-full w-full">
      <Github className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full " />
      <Instagram className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full " />
      <Mail className="w-10 h-10 text-textLight bg-hoverColor hover:-translate-y-2 hover:text-primary transition-all duration-300 p-2 rounded-full" />
      <span className="h-32 w-[2px] bg-textLight" />
    </div>
  );
};

export default LeftSide;
