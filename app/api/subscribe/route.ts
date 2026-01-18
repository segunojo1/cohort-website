import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Path to the JSON file that will store the emails
const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

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

    // Create data directory if it doesn't exist
    await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true });

    // Read existing subscribers or create new array if file doesn't exist
    let subscribers: string[] = [];
    try {
      const fileContents = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
      subscribers = JSON.parse(fileContents);
    } catch (error) {
      // File doesn't exist yet, which is fine
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { message: 'This email is already subscribed' },
        { status: 200 }
      );
    }

    // Add new email and save
    subscribers.push(email);
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

    return NextResponse.json(
      { message: 'Thank you for subscribing!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}
