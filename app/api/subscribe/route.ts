// c:\Users\hp\Documents\cohort-website\app\api\subscribe\route.ts
import { NextResponse } from 'next/server';
import { db } from '@/database/drizzle';
import { subscribersTable } from '@/database/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
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
        return NextResponse.json(
          { message: 'This email is already subscribed' },
          { status: 200 }
        );
      }

      // Insert new subscriber
      await db
        .insert(subscribersTable)
        .values({ email })
        .execute();

      return NextResponse.json(
        { message: 'Thank you for subscribing!' },
        { status: 201 }
      );
    } catch (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to process subscription' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}