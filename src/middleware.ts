import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Edge runtime code
  if (process.env.VERCEL_ENV === 'preview') {
    // Your protection logic
  }
  return NextResponse.next()
} 