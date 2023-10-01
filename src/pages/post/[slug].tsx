import Head from "next/head";
import { Back } from "@/components/Back";
import { Mdx } from "@/components/Mdx-detail";
import { Comment } from "@/components/Utterances";
import { Blog, allBlogs } from "contentlayer/generated";
import { Svg } from "@/assets";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ posts, params }: { posts: Blog[]; params: string }) => {
  const currentPost = posts.find((post) => post.slug === params)!;
  const [isSeriesOpen, setIsSeriesOpen] = useState(true);
  const router = useRouter();

  const series = posts
    .filter((post) => post.series === currentPost.series)
    .sort((a, b) => a.seriesIndex - b.seriesIndex);

  const isFirstSeries = currentPost.seriesIndex === 0;
  const isLastSeries = currentPost.seriesIndex === series.length - 1;

  return (
    <>
      <Head>
        <title>{currentPost.title}</title>
        <meta property="og:title" content={currentPost.title} />
      </Head>
      <div className="max-w-[632px] px-4 m-auto mb-40">
        <Back />
        <h1 className="mt-6 mb-3 text-4xl">{currentPost.title}</h1>
        <time className="text-xl">{currentPost.date}</time>

        {currentPost.series !== "none" && (
          <div className="px-6 py-6 my-8 border border-blue-400 rounded-lg h-fit">
            <h1 className="flex justify-between mb-4 text-xl">
              <div>{currentPost.series}</div>
              <div className="text-lg">
                {currentPost.seriesIndex + 1} / {series.length}
              </div>
            </h1>
            {isSeriesOpen && (
              <div className="pb-4">
                {series.map((seriesItem) => (
                  <Link
                    className={`block pl-4 py-1 ${
                      seriesItem.seriesIndex === currentPost.seriesIndex
                        ? "text-blue-400 cursor-default"
                        : "hover:underline"
                    }`}
                    href={`/post/${seriesItem.slug}`}
                  >
                    {seriesItem.title}
                  </Link>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between">
              <button
                className="flex"
                onClick={() => setIsSeriesOpen(!isSeriesOpen)}
              >
                <div>{isSeriesOpen ? "숨기기" : "목록 보기"}</div>
                <Svg.FilledArrow direction={isSeriesOpen ? "top" : "bottom"} />
              </button>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    if (isFirstSeries) return;
                    router.push(
                      `/post/${series[currentPost.seriesIndex - 1].slug}`
                    );
                  }}
                  className={`${
                    isFirstSeries ? "cursor-not-allowed" : "hover:bg-slate-200"
                  } flex items-center justify-center w-8 h-8 rounded-full`}
                >
                  <Svg.Arrow color={isFirstSeries ? "#bfbfbf" : undefined} />
                </button>
                <button
                  onClick={() => {
                    if (isLastSeries) return;
                    router.push(
                      `/post/${series[currentPost.seriesIndex + 1].slug}`
                    );
                  }}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    isLastSeries ? "cursor-not-allowed" : "hover:bg-slate-200"
                  }`}
                >
                  <Svg.Arrow
                    direction="right"
                    color={isLastSeries ? "#bfbfbf" : undefined}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        <hr className="my-10" />
        <Mdx code={currentPost.body.code} />
        <Comment />
      </div>
    </>
  );
};

export async function getStaticPaths({ params }) {
  const paths = allBlogs.map((blog) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: allBlogs, params: params.slug },
  };
}
