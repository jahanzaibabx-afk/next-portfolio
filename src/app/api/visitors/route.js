import { NextResponse } from 'next/server';
import Redis from 'ioredis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

let redisClient = null;

function getRedisClient() {
  if (!process.env.REDIS_URL) {
    throw new Error('REDIS_URL is not configured.');
  }

  if (!redisClient) {
    redisClient = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 1,
      connectTimeout: 5000,
    });
    redisClient.on('error', (error) => {
      console.warn('Redis client connection error:', error.message);
    });
  }

  return redisClient;
}

export async function GET() {
  try {
    const redis = getRedisClient();
    const currentCount = await redis.incr('portfolio_visitor_count');

    return NextResponse.json(
      { visitors: Number.parseInt(currentCount, 10), live: true },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(
      `Visitor analytics is unavailable; returning fallback. ${message}`,
    );

    return NextResponse.json(
      { visitors: 0, live: false, degraded: true },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      },
    );
  }
}
