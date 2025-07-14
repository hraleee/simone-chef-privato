import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const data = await request.json();
  const updated = await prisma.menu.update({
    where: { id },
    data: {
      name: data.name,
      price: data.price,
      type: data.type,
      description: data.description,
    } as any,
  });
  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  await prisma.menu.delete({ where: { id } });
  return NextResponse.json({ success: true });
} 