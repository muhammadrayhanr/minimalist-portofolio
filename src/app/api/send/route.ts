/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailTemplate } from '@/components/molecules/Contact/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['conand.doyle4869@gmail.com'],
      subject: 'Message from your website',
      react: await EmailTemplate({ name: body.name, email: body.email, message: body.message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
      status: 500,
    });
  }
}
