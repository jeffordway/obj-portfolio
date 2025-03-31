// Configuration for Sanity's Live Content API
// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout
// See: https://github.com/sanity-io/next-sanity#live-content-api for more information
import { defineLive } from "next-sanity";
import { client } from "./client";

// Export sanityFetch and SanityLive components for real-time content updates
export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    // Live content is currently only available on the experimental API
    // See: https://www.sanity.io/docs/api-versioning
    apiVersion: "vX" 
  }) 
});
