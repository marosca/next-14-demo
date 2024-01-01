import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = { count: 2 };
  return NextResponse.json(data);
}
