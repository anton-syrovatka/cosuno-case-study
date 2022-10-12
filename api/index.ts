import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import { companies, specialties } from './data';
import { sleep, byName, bySpecialties, stringToArray } from './utils';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/companies/specialties', async (req: Request, res: Response) => {
  await sleep(500);

  res.json({ specialties });
});

app.get('/companies', async (req: Request, res: Response) => {
  const { page: _page, term, specialties } = req.query;

  const result = companies
    .filter(byName(term as string))
    .filter(bySpecialties(stringToArray(specialties as string[])));

  const total = result.length;
  const page = parseInt(_page as string, 10) || 1;
  const limit = 5;
  const hasPrevPage = page > 1;
  const hasNextPage = limit * page < total;
  const offset = (page - 1) * limit;

  await sleep(500);

  res.json({
    companies: result.slice(offset, offset + limit),
    paging: {
      total,
      page,
      limit,
      hasPrevPage,
      hasNextPage,
    },
  });
});

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(3000, () => console.log('Server is listening on port 3000'));
