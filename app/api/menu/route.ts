// app/api/menu/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const menu = await prisma.menu.findMany();
  return NextResponse.json(menu);
}

export async function POST(request: Request) {
  const data = await request.json();
  const created = await prisma.menu.create({
    data: {
      name: data.name,
      price: data.price,
      type: data.type,
      description: data.description,
    } as any,
  });
  return NextResponse.json(created);
}


