import { Preview } from "@/components/post/Preview";
import { Blog, allBlogs } from "contentlayer/generated";
import { WithHeaderFooter } from "@/layouts/WithHeaderFooter";

export default ({ posts }: { posts: Blog[] }) => {
  let canRenderPosts: Blog[] = [];

  posts.forEach((post) => {
    if (post.series === "none" || post.seriesIndex === 0) {
      canRenderPosts.push(post);
    }
  });

  return (
    <WithHeaderFooter>
      {canRenderPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((blog) => (
          <Preview {...blog} />
        ))}
    </WithHeaderFooter>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: allBlogs,
    },
  };
}
