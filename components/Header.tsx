import { Github, LinkedIn, Mail } from "@/assets/svg";
import Link from "next/link";

const SOCIAL_URL = {
  GITHUB: "https://github.com/eliot-Cho",
  LINKED_IN:
    "https://www.linkedin.com/in/%EC%83%81%ED%98%84-%EC%A1%B0-0b8743273/",
  MAIL: "mailto:eliotCho.dev@gmail.com",
};

const linkList = [
  {
    icon: <Github />,
    href: SOCIAL_URL.GITHUB,
  },
  {
    icon: <LinkedIn />,
    href: SOCIAL_URL.LINKED_IN,
  },
  {
    icon: <Mail />,
    href: SOCIAL_URL.MAIL,
  },
] as const;

export const Header = () => {
  return (
    <header className="flex items-center justify-between mb-24">
      <Link href={"/"} className="text-3xl font-extralight">
        Cho Sang Hyeon
      </Link>
      <nav>
        <ul className="flex gap-6">
          {linkList.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              target="_blank"
              className="hover:opacity-60"
            >
              {link.icon}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
