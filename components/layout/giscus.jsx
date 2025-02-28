import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const themeMapping = {
  light: "light",
  dark: "dark",
};

export default function Comments() {
  const { resolvedTheme } = useTheme();
  const theme = themeMapping[resolvedTheme];

  return (
    <Giscus
      id="comments"
      repo="PurrCat101/NextJSblog"
      repoId="R_kgDONqm7uA"
      category="Announcements"
      categoryId="DIC_kwDONqm7uM4CnbS-"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      strict="1"
      lang="en"
      loading="lazy"
    />
  );
}
