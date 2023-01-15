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

  // Call GetUser endpoint
  const response = await fetch(`${process.env.PENNY_PINCHER_API_URL}/u/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const user = await response.json();
  const payload =
    response.status === 200
      ? { user, auth0ID: id }
      : { user: null, auth0ID: id };

  res.status(response.status).json(payload);
}
