import Link from "next/link";

const RightSide = () => {
  return (
    <div className="flex flex-col gap-24 items-center justify-end h-full w-full">
      <p className="text-sm rotate-90 text-primary">
        <Link href="mailto:yvesmugisha09@gmail.com">
          yvesmugisha09@gmail.com
        </Link>
      </p>
      <span className="h-32 w-[2px] bg-textLight" />
    </div>
  );
};

export default RightSide;
