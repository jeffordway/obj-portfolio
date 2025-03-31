/**
 * ESLint Configuration
 * 
 * This file configures ESLint for the project using the new flat config format.
 * It extends the Next.js recommended configurations for core web vitals and TypeScript.
 */

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Convert ESM meta URLs to file paths for compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compatibility layer for ESLint configuration
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
