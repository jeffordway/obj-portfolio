import { NextResponse } from 'next/server';

/**
 * Next.js Middleware for performance optimization
 * 
 * This middleware adds performance-enhancing headers to responses
 * since the custom server with compression isn't used on Vercel.
 */
export function middleware() {
  const response = NextResponse.next();
  
  // Add performance-related headers
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except API routes and static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
