import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Sanity client configuration for content fetching
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
