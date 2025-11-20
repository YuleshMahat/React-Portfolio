import { mongoConnect, getDB } from "@/lib/config/mongoConfig";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const getMainInfo = async (id) => {
  try {
    await mongoConnect();
    const db = getDB();
    console.log("db established");
    const collection = db.collection("mainInfo");
    console.log("Querying with userId:", id);
    const mainInfo = await collection.findOne({ userId: new ObjectId(id) }); // Convert to ObjectId
    console.log("Found mainInfo:", mainInfo);

    if (!mainInfo) {
      return NextResponse.json(
        { status: "error", message: "Main info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: "success", data: mainInfo });
  } catch (error) {
    console.error("Error fetching main info:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to fetch main info" },
      { status: 500 }
    );
  }
};
