import { getTaxonomy } from "../lib/myths";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  try {
    const taxonomy = await getTaxonomy();
    return <HeaderClient initialTaxonomy={taxonomy} />;
  } catch (error) {
    console.error("Error loading taxonomy for header:", error);
    return (
      <HeaderClient initialTaxonomy={{ communities: [], tags: [], regions: [] }} />
    );
  }
}
