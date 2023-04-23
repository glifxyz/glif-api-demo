// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  input: string;
  output?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const params = { ...req.body, ...req.query };
  const { id, input } = params;
  if (!id || !input) {
    return res.status(400).json({ error: "missing id param", id, input });
  }

  const output =
    "Hello I am a fully captured streaming response from glif API cool";

  res.status(200).json({ id, input, output });
}
