import { NextResponse } from 'next/server';
import { createChatCompletion } from '@/hooks/openai';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const response = await createChatCompletion(messages);
    return NextResponse.json({ message: response });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}