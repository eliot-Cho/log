import { POSTS_PATH } from "@/utils/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import Markdown from "react-markdown";
import { PostType, getParsedFileContentBySlug } from "@/utils/post";
import { Layout } from "@/components/Layout";
import "github-markdown-css/github-markdown-light.css";
import { Comment } from "@/components/Comment";

export default ({ post }: { post: PostType }) => {
  return (
    <Layout>
      <h1 className={"text-3xl font-semibold"}>{post.frontMatter.title}</h1>
      <time className="text-gray-400 mt-2 mb-8 block">
        {post.frontMatter.date}
      </time>
      <div
        className="mb-20 whitespace-pre-wrap markdown-body"
        id={"pretendard"}
      >
        <Markdown>{post.content}</Markdown>
        <Comment />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const post = getParsedFileContentBySlug(slug, POSTS_PATH);

  return {
    props: { post },
  };
};
