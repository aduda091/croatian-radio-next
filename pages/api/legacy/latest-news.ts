import type { NextApiRequest, NextApiResponse } from 'next';
import initMiddleware from '../../../src/middleware/init-middleware';
import Cors from 'cors';
import { getUrls } from '../../../src/utils/legacy/crawler';

const cors = initMiddleware(
    Cors({
        methods: ['GET']
    })
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res);
    try {
        const newsUrls = await getUrls();
        return res.status(200).json(newsUrls);
    } catch (err) {
        console.log(err);
        return res.status(404).send({ error: err });
    }
}
