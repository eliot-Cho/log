import { join } from "path";
import matter from "gray-matter";
import fs from "fs";
import { seriesList } from "@/scripts/series";

export const titleFormat = (title: string) =>
  title.toLocaleLowerCase().replace(/\s+/g, "-").replace(/\?/g, "");

export const getParsedFileContentBySlug = (slug: string, postsPath: string) => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: { ...data, formatTitle: titleFormat(data.title) },
    content,
  };
};

export interface PostType {
  content: string;
  frontMatter: {
    date: string;
    series: keyof typeof seriesList;
    seriesIndex: number;
    title: string;
    formatTitle: string;
  };
}
