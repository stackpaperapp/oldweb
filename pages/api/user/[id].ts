import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../types/user";

type Data = {
  user: User | null;
  auth0ID: string | string[] | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log({ req, res });
  const { id } = req.query;

  // Call GetUser endpoint

  res.status(200).json({ user: null, auth0ID: id });
}
