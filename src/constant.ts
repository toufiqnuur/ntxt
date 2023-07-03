import { Client, Databases, Query } from "appwrite";

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID
const COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_ID

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const db = new Databases(client);

export const getRecentTweets = async (limit: number) => {
  let res, err;
  try {
    res = await db.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
      Query.limit(limit),
    ]);
  } catch (error) {
    err = error;
  }
  return { res, err };
};

export const getTweets = async ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  let res, err;
  try {
    res = await db.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("$createdAt"),
      Query.limit(limit),
      Query.offset(offset),
    ]);
  } catch (error) {
    err = error;
  }
  return { res, err };
};
