<<<<<<< HEAD
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()
=======
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher (
    [
        "/dashboard(.*)",
        "/jobs(.*)"
        
    ]
)


export default clerkMiddleware(async (auth, req) => {
    const authResult = await auth();
    if (!authResult?.userId && isProtectedRoute(req)) {
        const { redirectToSignIn } = await auth();
        return redirectToSignIn?.();
    }
});
>>>>>>> 9a183aa (first test)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
<<<<<<< HEAD
}
=======
};
>>>>>>> 9a183aa (first test)
