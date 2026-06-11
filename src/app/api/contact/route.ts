import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("--- Contact Form Submission ---");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
      console.log("--- End ---");
    }

    // Send email via Resend (recommended)
    // 1. Set RESEND_API_KEY in .env.local
    // 2. Set CONTACT_EMAIL to where submissions should be sent
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: `Mera Darzi Contact <onboarding@resend.dev>`,
        to: process.env.CONTACT_EMAIL,
        subject: `New Contact from ${name} - Mera Darzi`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        replyTo: email,
      });
    }

    // Send via WhatsApp as fallback (will show in WhatsApp notification)
    // This requires a WhatsApp Business API setup

    return NextResponse.json(
      { success: true, message: "Message received! Hum 24 ghante mein reply karenge." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Kuch masla ho gaya. Dobara try karein ya WhatsApp karein." },
      { status: 500 }
    );
  }
}
