import { NextRequest, NextResponse } from 'next/server';
import { Language } from '@/lib/i18n/translations';

const LANGUAGE_COOKIE_KEY = 'language-preference';

export async function POST(request: NextRequest) {
  try {
    const { language } = await request.json();

    if (!language || (language !== 'es' && language !== 'en')) {
      return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
    }

    const response = NextResponse.json(
      { success: true, language },
      { status: 200 }
    );

    // Set cookie for server-side language preference (1 year expiration)
    response.cookies.set({
      name: LANGUAGE_COOKIE_KEY,
      value: language,
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const language = request.cookies.get(LANGUAGE_COOKIE_KEY)?.value || 'es';
    return NextResponse.json({ language });
  } catch (error) {
    return NextResponse.json({ language: 'es' }, { status: 200 });
  }
}
