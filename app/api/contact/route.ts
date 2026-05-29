import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!discordWebhookUrl) {
      return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
    }

    const { name, email, message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Missing message field." }, { status: 400 });
    }

    const payload = {
      content: message,
    };

    const res = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Discord webhook error:", res.status, await res.text());
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
