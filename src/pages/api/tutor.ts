import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Handle tutor chat logic
    const response = await yourTutorLogic(req.body)
    res.status(200).json(response)
  }
} 