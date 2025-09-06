// app/api/addtask/route.ts
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.redirect(new URL("/auth/signin"))
    }

    const data = await req.json()

    const task = await prisma.task.create({
      data: {
        title: data.title,
        details: data.details,
        addedById: session.user.id, 
      },
    })

    return NextResponse.json(task)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
