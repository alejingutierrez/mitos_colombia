import StoryShadowGallery from "../../../components/instagram/StoryShadowGallery";
import StoryVariantGallery from "../../../components/instagram/StoryVariantGallery";
import path from "node:path";
import { notFound } from "next/navigation";
import StoryStudio from "../../../components/instagram/StoryStudio";
import { StorySlide } from "../../../components/instagram/StorySlide";
import { cachedStoryCatalog, storyLibrary } from "../../../lib/instagram-story-server";
import { optionalJson, identifier } from "../../../../scripts/instagram/lib/story-catalog.mjs";

export const dynamic = "force-dynamic";
export const metadata = { title: "Taller de carruseles · Mitos de Colombia", robots: { index: false, follow: false } };

export default async function StoryPage({ searchParams }) {
  // Local production workshop. Source art and draft manuscripts are not served
  // by the public deployment, even when these routes are built on Vercel.
  if (process.env.NODE_ENV === "production") notFound();
  const query = await searchParams;
  const community = query.community || "muiscas";
  const slug = query.myth || "bachue";
  if (!identifier(community) || !identifier(slug)) notFound();
  if (query.edition) {
    if (!/^prepared-\d{2,}$/.test(query.edition)) notFound();
    const composition = await optionalJson(path.join(process.cwd(), "content/instagram/editions", community, slug, query.edition, "composition.json"));
    const index = Number(query.slide) - 1;
    const slide = composition?.slides?.[index];
    if (!slide) notFound();
    const asset = composition.assets.find((a) => a.id === slide.asset_id);
    return <main style={{ width:1080, height:1350 }}><StorySlide story={composition} slide={slide} asset={asset} index={index} /></main>;
  }
  let catalog;
  try { catalog = await cachedStoryCatalog(community, slug); }
  catch (error) { if (error.code === "ENOENT") notFound(); throw error; }
  const [story, library] = await Promise.all([
    optionalJson(path.join(process.cwd(), "content/instagram/stories", community, `${slug}.json`)), storyLibrary(community),
  ]);
  if (query.shadows === "1" && story) return <StoryShadowGallery story={story} catalog={catalog} />;
  if (query.variants === "1" && story) return <StoryVariantGallery story={story} catalog={catalog} byFamily={query.view === "families"} />;
  return <div><StoryStudio key={`${community}/${slug}`} initialStory={story} catalog={catalog} library={library} /></div>;
}
