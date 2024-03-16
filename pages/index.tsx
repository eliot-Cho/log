import fs from "fs";
import { GetStaticProps } from "next";
import { POSTS_PATH } from "@/utils/constants";
import {
  PostType,
  getParsedFileContentBySlug,
  titleFormat,
} from "@/utils/post";
import Link from "next/link";
import { Layout } from "@/components/Layout";

export default ({ posts }: { posts: PostType[] }) => {
  return (
    <Layout>
      {posts.map((post, idx) => (
        <Link
          href={`/${post.frontMatter.formatTitle}`}
          key={idx}
          className="hover:underline"
        >
          <h2 className="text-3xl font-bold">{post.frontMatter.title}</h2>
          <time className="text-gray-400 mt-2 mb-8 block">
            {post.frontMatter.date}
          </time>
        </Link>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => getParsedFileContentBySlug(slug, POSTS_PATH));

  return {
    props: { posts },
  };
};
