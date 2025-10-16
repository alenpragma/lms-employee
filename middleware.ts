import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("employeeId")?.value;
  const { pathname } = request.nextUrl;
  if (!token && !["/verify"].includes(pathname)) {
    return NextResponse.redirect(new URL("/verify", request.url));
  }
  if (token && ["/verify"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}
export const config = {
  matcher: ["/dashboard/:path*", "/verify"],
};
