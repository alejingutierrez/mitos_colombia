import { getTaxonomy } from "../lib/myths";
import HeaderClient from "./HeaderClient";

export default async function Header({ taxonomy }) {
  try {
    const resolvedTaxonomy = taxonomy ?? (await getTaxonomy());
    return <HeaderClient initialTaxonomy={resolvedTaxonomy} />;
  } catch (error) {
    console.error("Error loading taxonomy for header:", error);
    return (
      <HeaderClient initialTaxonomy={{ communities: [], tags: [], regions: [] }} />
    );
  }
}
