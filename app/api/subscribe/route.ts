// c:\Users\hp\Documents\cohort-website\app\api\subscribe\route.ts
import { NextResponse } from 'next/server';
import { db } from '@/database/drizzle';
import { subscribersTable } from '@/database/schema';
import { eq } from 'drizzle-orm';

const ALLOWED_ORIGIN = 'https://trycohort.xyz';

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

function jsonWithCors(body: unknown, init?: ResponseInit) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      ...corsHeaders,
      ...(init?.headers ?? {}),
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonWithCors(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    try {
      // Check if email already exists
      const existingSubscriber = await db
        .select()
        .from(subscribersTable)
        .where(eq(subscribersTable.email, email))
        .execute();

      if (existingSubscriber.length > 0) {
        return jsonWithCors(
          { message: 'This email is already subscribed' },
          { status: 200 }
        );
      }

      // Insert new subscriber
      await db
        .insert(subscribersTable)
        .values({ email })
        .execute();

      return jsonWithCors(
        { message: 'Thank you for subscribing!' },
        { status: 201 }
      );
    } catch (error) {
      console.error('Database error:', error);
      return jsonWithCors(
        { error: 'Failed to process subscription' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request error:', error);
    return jsonWithCors(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}