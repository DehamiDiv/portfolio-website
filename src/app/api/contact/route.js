import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Basic validation
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

    // 2. Database storage or Fallback Mock logging
    if (supabase) {
      const { error } = await supabase
        .from("messages")
        .insert([
          {
            name,
            email,
            subject,
            message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error("Supabase Database Insert Error:", error);
        return NextResponse.json(
          { error: "Failed to store message in database. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: "Message sent successfully!" },
        { status: 200 }
      );
    } else {
      // Fallback Demo Mode logging
      console.log("-----------------------------------------");
      console.log("📩 NEW PORTFOLIO CONTACT MESSAGE (DEMO MODE):");
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("-----------------------------------------");
      
      return NextResponse.json(
        { 
          message: "Message received in demo mode!", 
          demo: true 
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
