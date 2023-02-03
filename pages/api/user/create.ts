import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../types/user";
import { getAccessToken } from "@auth0/nextjs-auth0";

type Data = {
  user: User | null;
  userid: string | string[] | undefined;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { accessToken } = await getAccessToken(req, res);

  const response = await fetch(
    `${process.env.PENNY_PINCHER_API_URL}/u/create`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify(req.body),
    }
  );

  const user = await response.json();

  const payload =
    response.status === 200
      ? { user, userid: user.userid }
      : { user: null, userid: null };
  res.status(response.status).json(payload);
}
