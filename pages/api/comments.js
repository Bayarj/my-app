import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const comments = await db
    .collection("comments")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(comments);
};