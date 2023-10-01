import Link from "next/link";
import { useRouter } from "next/router";

interface LinkType {
  name: string;
  href: string;
}

const linkList: LinkType[] = [
  { name: "About", href: "/" },
  { name: "Post", href: "/post" },
];

export const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex gap-4 mb-8">
      {linkList.map((link) => {
        const isCur = pathname === link.href;
        return (
          <Link
            href={link.href}
            className={`font-normal text-lg ${
              isCur
                ? "border-b-2 border-blue-400 cursor-default"
                : "hover:opacity-60"
            }`}
            key={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
