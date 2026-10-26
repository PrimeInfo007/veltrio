import { News } from "./news";

export function SpecialNewsContent() {
  return (
    <News
      articles={[
        {
          href: "https://veltrio.link/startups",
          title: "Veltrio Startup Program 🚀",
          summary:
            "50% off our yearly Advanced plan – our biggest discount ever.",
          image: "https://assets.dub.co/og/startups.jpg",
        },
      ]}
    />
  );
}
