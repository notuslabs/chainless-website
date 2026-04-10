import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except Next internals, API routes, and anything with a file extension
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
