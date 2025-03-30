import { NotFoundPage } from '@/components/layout';

/**
 * Site-specific 404 page that uses the shared NotFoundPage component
 * This maintains the (site) route group layout while using the same content
 */
export default function NotFound() {
  return <NotFoundPage />;
}
