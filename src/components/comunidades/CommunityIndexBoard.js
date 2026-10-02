"use client";
import { VisualIndex } from "../organisms/VisualIndex";
export function CommunityIndexBoard({ communities = [], regions = [] }) {
  return <VisualIndex label="comunidades" sortByCount regions={regions} items={communities.map((community) => ({...community,title:community.name,href:`/comunidades/${community.slug}`}))} />;
}
export default CommunityIndexBoard;
