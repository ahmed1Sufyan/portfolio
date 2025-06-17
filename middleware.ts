// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const passCookie = request.cookies.get("admin_pass")?.value;

  if (url.pathname.startsWith('/not-allow') && passCookie !== 'granted') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/not-allow/:path*'],
};

