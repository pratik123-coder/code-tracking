import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/login', '/register'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  console.log("userId", userId);
  console.log("req.nextUrl.pathname", req.nextUrl.pathname);

  if (!userId && !isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/login", req.nextUrl.origin).toString());
  }

  if (userId && req.nextUrl.pathname !== "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin).toString());
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

