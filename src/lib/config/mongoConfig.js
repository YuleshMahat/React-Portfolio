import { MongoClient } from "mongodb";
//for mongo native drive to read data from db
let db;

export const mongoConnect = async () => {
  if (db) return db;

  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();

    console.log("Connected to MongoDB");

    db = client.db();
    return db;
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    throw err;
  }
};

export const getDB = () => {
  if (!db)
    throw new Error("Database not connected. Call mongoConnect() first.");
  return db;
};
