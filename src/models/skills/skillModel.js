import { getDB } from "@/lib/config/mongoConfig";
import { ObjectId } from "mongodb";

export const findOne = (id) => {
  const db = getDB();
  const collection = db.collection("skills");
  return collection.findOne({ userId: new ObjectId(id) });
};
