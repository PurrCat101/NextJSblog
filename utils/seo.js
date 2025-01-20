export const siteTitle = "PurrCat101";
export const description =
  "Welcome to WebTech Note. I share what I have learned from my experience as a front-end web developer.";
export const domain = "";
export const twitter = "";

export const seoProps = {
  title: siteTitle,
  description: description,
  openGraph: {
    type: "website",
    title: siteTitle,
    siteName: siteTitle,
    description: description,
    images: [
      {
        url: `${domain}/images/ogp.png`,
        width: 1300,
        height: 630,
        alt: "PurrCat101",
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/logo.svg",
    },
  ],
};
