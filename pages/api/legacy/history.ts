import type { NextApiRequest, NextApiResponse } from 'next';
import { findLatestShows } from '../../../src/utils/legacy/crawler';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const shows = await findLatestShows('povijest-cetvrtkom');
        return res.status(200).json(shows);
    } catch (err) {
        console.log(err);
        return res.status(404).send({ error: err });
    }
}
