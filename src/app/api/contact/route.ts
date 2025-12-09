import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  
  try {
    const data = await req.json();
    const { firstName, email, message } = data;

    if (!firstName || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    // Basic SMTP env validation
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || user;
    console.log(host, port,user, pass, to);
    
    if (!host || !user || !pass || !to) {
      console.error("SMTP env missing", { host: !!host, user: !!user, pass: !!pass, to: !!to });
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for others (e.g. 587)
      auth: {
        user,
        pass,
      },
      tls: {
    rejectUnauthorized: false
  }
    });

    // Mail options
    const mailOptions = {
      from: `"${firstName}" <${email}>`, // sender
      to,                                // your receiving email
      subject: "New Contact Form Submission",
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
