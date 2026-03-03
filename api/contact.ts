import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.VITE_CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return res.status(500).json({ ok: false, error: 'Missing env vars' });
  }

  const { name, from, message, website } = (req.body ?? {}) as {
    name?: string;
    from?: string;
    message?: string;
    website?: string;
  };

  if (String(website ?? '').trim()) return res.status(200).json({ ok: true });

  const safeName = String(name ?? '').trim();
  const safeFrom = String(from ?? '').trim();
  const safeMessage = String(message ?? '').trim();

  if (!safeName || !safeFrom || !safeMessage) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }

  if (safeMessage.length > 8000) {
    return res.status(400).json({ ok: false, error: 'Message too long' });
  }

  const resend = new Resend(apiKey);

  const subject = `Website message from ${safeName}`;
  const text = `Name: ${safeName}\nEmail: ${safeFrom}\n\n${safeMessage}`;

  const result = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: safeFrom,
    subject,
    text,
  });

  if (result.error) {
    return res.status(500).json({ ok: false, error: result.error.message });
  }

  return res.status(200).json({ ok: true });
}
