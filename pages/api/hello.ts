// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import fs from 'fs';

// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const templateName = req.query.name;
  const PROJECT_ROOT = path.join(__dirname, '..', '..', '..', '..');
  const TEMPLATES_DIR = path.join(PROJECT_ROOT, 'public', 'emails');

  if (!templateName) {
      return res.status(400).send({ error: 'Template name is required.' });
  }

  const filePath = path.join(TEMPLATES_DIR, `${templateName}.html`);
  console.log(filePath);
  console.log('testtesttest');

  if (fs.existsSync(filePath)) {
      const htmlContent = fs.readFileSync(filePath, 'utf-8');
      return res.send(htmlContent);
  } else {
      return res.status(404).send({ error: 'Template not found.' });
  }
  
  // const {ernests} = req.query;
  // if (Array.isArray(ernests) || !ernests) {
  //   throw new Error("This is an array or undefineddd");
  // }

  // res.status(200).json({ name: ernests.toUpperCase() });
}
