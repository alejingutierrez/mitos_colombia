import Link from "next/link";
import { cn } from "../../lib/utils";
import { ImageFrame } from "../atoms";
import { getMythImage } from "../../lib/myth-images";
export function MythPlate({ myth, index, motif = "jaguar", priority = false, className }) {
  const { slug, title } = myth || {};
  return <Link href={slug ? `/mitos/${slug}` : "#"} className={cn("group flex h-full min-w-0 flex-col text-jungle-700 focus-visible:outline-2 focus-visible:outline-jungle-500",className)}>
    <ImageFrame src={getMythImage(myth,"portrait")} alt="" ratio="2 / 3" quality={90} priority={priority} sizes="(max-width: 639px) 48vw, (max-width: 1023px) 45vw, 32vw" placeholderMotif={motif} className="rounded-none border-0" imgClassName="atlas-image-zoom object-cover" />
    <span className="block bg-paper px-3 py-4">{Number.isFinite(index) ? <span className="atlas-figure block text-xs text-ink-700">{String(index + 1).padStart(2,"0")}</span> : null}<span className="mt-1 block font-display text-lg leading-tight group-hover:text-jungle-500">{title}</span></span>
  </Link>;
}
