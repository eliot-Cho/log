import Link from "next/link";

export function CustomLink({ as, href, ...otherProps }) {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} />
    </Link>
  );
}
