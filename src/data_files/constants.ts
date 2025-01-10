import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "HOFE",
  tagline: "Top Hoax Detection App",
  description: "HOFE is a powerful hoax detection app that helps users quickly verify information using advanced machine learning algorithms. Combat misinformation and make informed decisions with ease.",
  description_short: "HOFE is an app designed to help users verify information and detect hoaxes using machine learning.",
  url: "https://hufe.com",  // Update this with the actual website URL if needed
  author: "HOFE Tim",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Top Hoax Detection App`,
  description: "HOFE is an advanced hoax detection app designed to help users verify information and combat misinformation. Using cutting-edge machine learning, HOFE provides accurate hoax detection and empowers users to make informed decisions.",
  image: ogImageSrc,  // Replace with the URL of your image for Open Graph sharing
};
