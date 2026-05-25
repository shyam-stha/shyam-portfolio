import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!discordWebhookUrl) {
      return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const payload = {
      embeds: [
        {
          title: "📬 New Portfolio Contact",
          color: 0xe2b857, // Champagne gold
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "📧 Email", value: email, inline: true },
            { name: "💬 Message", value: message },
          ],
          footer: {
            text: "shyamshrestha.dev • Portfolio Contact Form",
          },
          timestamp: new Date().toISOString(),
        },
      ],
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
