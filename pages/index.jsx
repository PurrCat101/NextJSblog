import Layout from "@/components/layout/layout";
import Sidebar from "@/components/layout/sidebar";
import Container from "@/components/layout/container";
import PostList from "@/components/layout/post-list";
import { allPosts } from "contentlayer/generated";
import { sortPublishedPosts } from "@/utils/posts";
import Link from "next/link";
import s from "@/styles/pages/home.module.scss";

export default function Home({ posts }) {
  return (
    <Layout home>
      <Container additionalClass={s.container}>
        <div className={s.content}>
          <main className={s.main}>
            <PostList posts={posts} headingLevel="h2" />
            <div className={s.more_posts}>
              <Link href="/posts" className={s.more_link}>
                See All Posts →
              </Link>
            </div>
          </main>
          <Sidebar />
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = sortPublishedPosts(allPosts).slice(0, 6);

  return { props: { posts } };
}
