import type { NextApiRequest, NextApiResponse } from 'next';
import { getUrls } from '../../../src/utils/legacy/crawler';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const newsUrls = await getUrls();
        return res.status(200).json(newsUrls);
    } catch (err) {
        console.log(err);
        return res.status(404).send({ error: err });
    }
}
