import { mongoConnect } from "@/lib/config/mongoConfig";
import { findById } from "@/models/projects/projectModel";
import { NextResponse } from "next/server";

export const getProjects = async (id) => {
  try {
    await mongoConnect();

    const projects = await findById(id);

    if (projects.length > 0)
      return NextResponse.json(
        { status: "success", message: "Fetched projects", data: projects },
        { status: 200 }
      );
    else
      return NextResponse.json(
        {
          status: "false",
          messagE: "Could not fetch projects",
        },
        { status: 500 }
      );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { status: "error", message: "Internal Server error" },
      { status: 500 }
    );
  }
};
