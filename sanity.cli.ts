/**
 * Sanity CLI Configuration
 * 
 * This configuration file lets you run `$ sanity [command]` in this folder.
 * It defines the project ID and dataset to use for CLI operations.
 * 
 * @see https://www.sanity.io/docs/cli for more information.
 */
import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({ api: { projectId, dataset } });
