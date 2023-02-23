import { lowerCase } from "lodash-es";
import Link from "next/link";

type TagProps = {
  children: string;
};

export const Tag = ({ children }: TagProps) => {
  return (
    <Link
      className="text-xs text-gray-500 font-normal rounded-full bg-gray-200 px-2 py-1 cursor-pointer"
      href={`/tags/${lowerCase(children)}`}
    >
      {children}
    </Link>
  );
};
