import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher(['/login', '/register', '/about', '/contact']);

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard',
  '/livebus',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentPath = req.nextUrl.pathname;

  console.log("userId", userId);
  console.log("req.nextUrl.pathname", currentPath);

  // Redirect unauthenticated users trying to access protected routes
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin).toString());
  }

  // Redirect authenticated users away from public routes
  if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin).toString());
  }

  // Allow access to protected routes for authenticated users
  if (userId && isProtectedRoute(req)) {
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
