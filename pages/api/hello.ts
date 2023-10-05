// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {ernests} = req.query;
  if (Array.isArray(ernests) || !ernests) {
    throw new Error("This is an array or undefined");
  }

  res.status(200).json({ name: ernests.toUpperCase() });
}
