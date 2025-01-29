import { NextResponse } from "next/server";
import { languages, defaultLanguage } from "@/config/languages";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // If the pathname starts with /api, skip the locale redirection logic
  if (pathname.startsWith('/api')) {
    return NextResponse.next(); // Skip locale check for API routes
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = languages.every(
    (lang) => !pathname.startsWith(`/${lang.code}/`) && pathname !== `/${lang.code}`
  );

  if (pathnameIsMissingLocale) {
    // Read the language from cookies, fallback to default language
    const cookieLang = request.cookies.get("lang")?.value;
    const locale = cookieLang && languages.some(lang => lang.code === cookieLang)
      ? cookieLang
      : defaultLanguage;

    // Redirect to the locale-prefixed URL
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
