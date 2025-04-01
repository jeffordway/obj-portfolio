import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// Create image URL builder for Sanity images
// See: https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Enhanced helper function to generate optimized image URLs from Sanity image references
 * Applies performance optimizations by default:
 * - Auto format detection for modern formats (webp/avif)
 * - Quality optimization
 * - Proper DPR handling
 */
export const urlFor = (source: SanityImageSource) => {
  return builder
    .image(source)
    .auto('format')
    .fit('max')
    .quality(80);
};

/**
 * Helper to generate a low-quality image placeholder
 * @param source Sanity image source
 * @returns URL for a tiny blurred placeholder image
 */
export const placeholderFor = (source: SanityImageSource) => {
  return builder
    .image(source)
    .width(20)
    .height(20)
    .blur(10)
    .quality(30)
    .url();
};
