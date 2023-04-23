// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  input: string;
  output?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const params = { ...req.body, ...req.query };
  const { id, input } = params;
  if (!id || !input) {
    return res.status(400).json({ error: "missing id param", id, input });
  }

  const data = { id, input };
  const url = `${process.env.GLIF_API_URL}/api/graph-run`;
  console.log("/api/glif", { url, data });
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GLIF_API_TOKEN}`,
    },
    body: JSON.stringify(data),
  });
  const output = await response.json();
  console.log("/api/glif", { output });

  res.status(200).json({ id, input, output });
}
