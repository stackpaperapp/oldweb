import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  ID: string;
  email: string;
};

type Data = {
  user: User | null;
  test: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ user: null, test: "test" });
}
