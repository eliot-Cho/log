import { Blog } from "contentlayer/generated";
import Link from "next/link";

export const Preview = ({ date, title, slug, series }: Blog) => {
  return (
    <Link key={slug} href={`/post/${slug}`} className="hover:opacity-60">
      <article className="flex items-center mb-8 text-xl">
        <span className="min-w-[75px] text-sm text-gray-500">{date}</span>
        <div className="h-4 ml-3 mr-4 border border-gray-300" />
        <span className="font-medium">{title}</span>
        {series !== "none" && (
          <div className="px-2 py-1 ml-2 text-xs font-bold text-white bg-blue-400 rounded-full">
            SERIES
          </div>
        )}
      </article>
    </Link>
  );
};
