import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

type Data = {
  ok: boolean;
};

const handler = nc<NextApiRequest, NextApiResponse<Data>>();

handler.get((req, res) => {
  res.status(200).json({ ok: true });
});

export default handler;
