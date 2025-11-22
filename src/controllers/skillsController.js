import { mongoConnect } from "@/lib/config/mongoConfig";
import { NextResponse } from "next/server";
import { findOne } from "@/models/skills/skillModel";

export const getSkills = async (id) => {
  try {
    await mongoConnect();
    const data = await findOne(id);

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
