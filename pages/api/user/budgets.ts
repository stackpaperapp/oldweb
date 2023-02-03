import type { NextApiRequest, NextApiResponse } from "next";
import type { Budgets } from "../../../types/budget";
import { getAccessToken } from "@auth0/nextjs-auth0";

type Data = {
  budgets: Budgets | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const { accessToken } = await getAccessToken(req, res);

  const response = await fetch(
    `${process.env.PENNY_PINCHER_API_URL}/u/${id}/b`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  console.log({ response });

  const budgets = await response.json();
  const payload = response.status === 200 ? { budgets } : { budgets: null };
  res.status(response.status).json(payload);
}
