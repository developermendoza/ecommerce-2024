import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/blog/") &&
    request.nextUrl.pathname.includes("%20")
  ) {
    const cleanUrl = createUrlFriendly(request);
    return NextResponse.redirect(new URL(cleanUrl, request.url));
  }

  if (request.nextUrl.pathname === "/account") {
    return NextResponse.redirect(new URL("/account/overview", request.url));
  }
}

const createUrlFriendly = (request: any) => {
  const cleanUrl = request.nextUrl.pathname
    .replace(/%20/g, "-")
    .replace(/ /g, "-");
  return cleanUrl;
};
