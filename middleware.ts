import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const user = { email: "sss" }

  if (
    !user &&
    (req.nextUrl.pathname.startsWith("/my-orders") ||
      req.nextUrl.pathname.startsWith("/checkout"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (
    (!user || (user && user.email !== process.env.ADMIN_EMAIL)) &&
    req.nextUrl.pathname.startsWith("/dashboard")
  ) {
    return new NextResponse(null, {
      status: 404,
    })
  }
}

export const config = {
  matcher: ["/my-orders", "/checkout", "/dashboard"],
}
