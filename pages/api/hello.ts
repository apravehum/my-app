// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { renderEmailTemplate } from '../../utils/render-email'; // Adjust the import path if needed


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const templateName = req.query.name;

  if (!templateName) {
      return res.status(400).send({ error: 'Template name is required.' });
  }

  if (Array.isArray(templateName)) {
    return res.status(400).send({ error: 'Template name is array.' });
  }

  try {
    const props = JSON.parse(req.body);
    const emailHtml = await renderEmailTemplate(templateName, props);

    if (emailHtml) {
      return res.status(200).send(emailHtml);
    } else {
      return res.status(404).send({ error: 'Template not found or failed to render.' });
    }
  } catch (error) {
    console.error(`Error parsing JSON: ${req.body}`, error);
  }

}
