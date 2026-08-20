import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, subject, message) are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    let emailSent = false;
    const recipientEmail = "dehamidivyanjali166@gmail.com";
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    // 2. Send via Web3Forms (Direct email delivery to recipient)
    if (web3Key) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: name,
            email: email,
            subject: `[Portfolio Inquiry] ${subject} — from ${name}`,
            message: message,
            from_name: "Dehami Portfolio Contact",
            replyto: email,
          }),
        });

        const web3Data = await web3Response.json();
        if (web3Data.success) {
          emailSent = true;
        } else {
          console.warn("Web3Forms warning:", web3Data.message);
        }
      } catch (err) {
        console.error("Web3Forms API call failed:", err);
      }
    }

    // 3. Send via Resend if RESEND_API_KEY is available
    if (!emailSent && resendKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: recipientEmail,
            reply_to: email,
            subject: `[Portfolio Message] ${subject} from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
                <h2 style="color: #6d28d9; margin-top: 0;">New Message from Portfolio Website</h2>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-top: 15px;">
                  <strong style="color: #475569;">Message:</strong>
                  <p style="white-space: pre-wrap; margin-top: 8px; line-height: 1.6;">${message}</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0 10px;" />
                <small style="color: #94a3b8;">Sent via Dehami Divyanjalee's Portfolio Contact Form</small>
              </div>
            `,
          }),
        });

        if (resendResponse.ok) {
          emailSent = true;
        }
      } catch (err) {
        console.error("Resend API call failed:", err);
      }
    }

    // 4. Optional database backup in Supabase
    if (supabase) {
      try {
        await supabase.from("messages").insert([
          {
            name,
            email,
            subject,
            message,
            created_at: new Date().toISOString(),
          },
        ]);
      } catch (dbErr) {
        console.error("Supabase insert error:", dbErr);
      }
    }

    // Fallback console log for local testing
    console.log("-----------------------------------------");
    console.log("📩 NEW PORTFOLIO CONTACT MESSAGE:");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Email Forwarded: ${emailSent ? "YES" : "NO (Add WEB3FORMS_ACCESS_KEY in .env.local)"}`);
    console.log("-----------------------------------------");

    return NextResponse.json(
      {
        message: "Thank you! Your message has been sent successfully.",
        emailDelivered: emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
