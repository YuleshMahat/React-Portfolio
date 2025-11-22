import { getDB } from "@/lib/config/mongoConfig";
import { ObjectId } from "mongodb";

export const findById = (id) => {
  const db = getDB();
  const collection = db.collection("projects");
  console.log(id);
  return collection.find({ userId: new ObjectId(id) }).toArray();
};
