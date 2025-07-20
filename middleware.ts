import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/', //home page
  '/sign-in(.*)', // Clerk's sign-in page
  '/sign-up(.*)', // Clerk's sign-up page
  '/api/webhook(.*)', // If you have webhooks
  // Add any other routes that should be publicly accessible
]);

export default clerkMiddleware(async  (auth, req) => {
  if (!isPublicRoute(req)) {
    // If the route is not public, require authentication
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, but allow authentication on Next.js API routes
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};