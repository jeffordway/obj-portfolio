import type { StructureResolver } from "sanity/structure";

// Structure configuration for Sanity Studio sidebar
// See: https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items(S.documentTypeListItems());
