import { mongoConnect, getDB } from "@/lib/config/mongoConfig";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const getSkills = async (id) => {
  try {
    await mongoConnect();
    const db = getDB();
    const collection = db.collection("skills");

    const data = await collection.findOne({ userId: new ObjectId(id) });

    if (!data) {
      return NextResponse.json(
        { status: "error", message: "Skill not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: "success", data: data.skills });
  } catch (error) {
    console.error("Error fetching skill:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to fetch skill" },
      { status: 500 }
    );
  }
};
