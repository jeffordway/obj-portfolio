import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// Create image URL builder for Sanity images
// See: https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

// Helper function to generate image URLs from Sanity image references
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
