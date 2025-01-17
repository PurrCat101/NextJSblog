import { DefaultSeo } from "next-seo";
import { pageView } from "@/utils/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GaScript } from "@/components/layout/ga-script";
import { seoProps } from "@/utils/seo";
import { mukta } from "@/utils/fonts";
import { ThemeProvider } from "next-themes";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  NO_GROUP,
} from "kbar";

import "@/styles/base/reset.scss";
import "@/styles/base/mixins.scss";
import "@/styles/base/colors.scss";
import "@/styles/base/global.scss";
import "@/styles/libs/rehype.scss";
import "@/styles/libs/tocbot.scss";
import "../styles/kbarStyles.scss";

import { allPosts } from "contentlayer/generated";

// Define search actions that will include both static and blog post actions
const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "about",
    perform: () => (window.location.pathname = "/about"),
  },
];

// Create blog post search actions
const searchActions = allPosts.map((post) => ({
  id: post._raw.flattenedPath,
  name: post.title,
  keywords: `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(
    " "
  )}`,
  section: "Blog",
  subtitle: post.tags.join(", "),
  perform: () => router.push(`/posts/${post._raw.flattenedPath}`),
}));

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <GaScript />
      <DefaultSeo {...seoProps} />
      <KBarProvider actions={[...actions, ...searchActions]}>
        <KBarPortal>
          <KBarPositioner className="kbar-positioner">
            <KBarAnimator className="kbar-animator">
              <KBarSearch className="kbar-search" />
              <RenderResults className="kbar-results" />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <ThemeProvider>
          <div className={mukta.className}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </KBarProvider>
    </>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="kbar-group-title">{item}</div>
        ) : (
          <div className={`kbar-result-item ${active ? "active" : ""}`}>
            <div className="kbar-result-content">
              <span className="kbar-result-name">{item.name}</span>
            </div>
          </div>
        )
      }
    />
  );
}

export default MyApp;
