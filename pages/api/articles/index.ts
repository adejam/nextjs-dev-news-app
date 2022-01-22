/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../data'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(articles)
}