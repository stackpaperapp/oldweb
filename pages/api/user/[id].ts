import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../types/user";
import { getAccessToken } from "@auth0/nextjs-auth0";

type Data = {
  user: User | null;
  auth0ID: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const { accessToken } = await getAccessToken(req, res);
  console.log({ accessToken, id });

  // Call GetUser endpoint

  res.status(200).json({ user: null, auth0ID: id });
}
