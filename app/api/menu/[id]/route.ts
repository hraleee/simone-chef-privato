import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


type Context = any;

export async function DELETE(_request: Request, context: any) {
  const params = await context.params;
  try {
    const deletedMenu = await prisma.menu.delete({
      where: { id: params.id },
    });
    return NextResponse.json(deletedMenu, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Menu item not found" }, { status: 404 });
  }
}

export async function PATCH(request: Request, context: any) {
  const params = await context.params;
  try {
    const data = await request.json();
    const updatedMenu = await prisma.menu.update({
      where: { id: params.id },
      data: {
        name: data.name,
        price: data.price,
        type: data.type,
        description: data.description,
      },
    });
    return NextResponse.json(updatedMenu, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Menu item not found or update failed" },
      { status: 400 }
    );
  }
}
