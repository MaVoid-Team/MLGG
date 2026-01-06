import { NextResponse } from "next/server";
import { Resend } from "resend";

// Instantiate Resend lazily inside the request handler to avoid throwing during build when the API key isn't set.

export async function POST(req: Request) {
  try {
    const apiKey = process.env?.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Resend API key is not configured. Set RESEND_API_KEY in your deployment environment.");
    }
    const resend = new Resend(apiKey);
    const body = await req.json();

    const data = await resend.emails.send({
      from: "MLGG Contact Form <info_mlgg@mavoid.com>",
      to: "Ziad.ahmed.25.25.25@gmail.com",
      subject: `New Lead Inquiry from ${body.firstName} ${body.lastName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead Inquiry - MLGG</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #EFF2F1; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #4059AD 0%, #6B9AC4 50%, #97D8C4 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">
                MLGG
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">
                MaVoid Lead Generation Group
              </p>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
                <p style="color: #F4B942; margin: 0; font-size: 18px; font-weight: 600;">
                  🎯 New Lead Inquiry Received
                </p>
              </div>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Greeting -->
              <div style="margin-bottom: 30px;">
                <h2 style="color: #4059AD; margin: 0 0 10px 0; font-size: 24px; font-weight: 600;">
                  New Investment Lead
                </h2>
                <p style="color: #64748b; margin: 0; font-size: 16px;">
                  A potential investor has submitted an inquiry through the MLGG website. Here are the details:
                </p>
              </div>

              <!-- Contact Details -->
              <div style="background: linear-gradient(135deg, #EFF2F1 0%, #97D8C4/10 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px; border-left: 4px solid #F4B942;">
                
                <!-- Name -->
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #97D8C4/30;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <div style="width: 10px; height: 10px; background-color: #F4B942; border-radius: 50%; margin-right: 12px;"></div>
                    <strong style="color: #4059AD; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Investor Name</strong>
                  </div>
                  <p style="margin: 0; color: #1e293b; font-size: 18px; font-weight: 600;">
                    ${body.firstName} ${body.lastName}
                  </p>
                </div>

                <!-- Email -->
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #97D8C4/30;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <div style="width: 10px; height: 10px; background-color: #6B9AC4; border-radius: 50%; margin-right: 12px;"></div>
                    <strong style="color: #4059AD; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</strong>
                  </div>
                  <p style="margin: 0;">
                    <a href="mailto:${body.email}" style="color: #4059AD; text-decoration: none; font-size: 16px; font-weight: 500; background-color: #4059AD/10; padding: 8px 12px; border-radius: 6px; display: inline-block;">
                      📧 ${body.email}
                    </a>
                  </p>
                </div>

                <!-- Phone -->
                ${body.phone ? `
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #97D8C4/30;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <div style="width: 10px; height: 10px; background-color: #97D8C4; border-radius: 50%; margin-right: 12px;"></div>
                    <strong style="color: #4059AD; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</strong>
                  </div>
                  <p style="margin: 0;">
                    <a href="tel:${body.phone}" style="color: #1e293b; text-decoration: none; font-size: 16px; font-weight: 500;">
                      📞 ${body.phone}
                    </a>
                  </p>
                </div>
                ` : ''}

                <!-- Company -->
                ${body.company ? `
                <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #97D8C4/30;">
                  <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <div style="width: 10px; height: 10px; background-color: #F4B942; border-radius: 50%; margin-right: 12px;"></div>
                    <strong style="color: #4059AD; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company/Organization</strong>
                  </div>
                  <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                    🏢 ${body.company}
                  </p>
                </div>
                ` : ''}

                <!-- Investment Goals -->
                <div>
                  <div style="display: flex; align-items: center; margin-bottom: 12px;">
                    <div style="width: 10px; height: 10px; background-color: #97D8C4; border-radius: 50%; margin-right: 12px;"></div>
                    <strong style="color: #4059AD; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Investment Goals & Requirements</strong>
                  </div>
                  <div style="background-color: #ffffff; border-radius: 12px; padding: 20px; border: 2px solid #97D8C4/20; box-shadow: 0 2px 8px rgba(151, 216, 196, 0.1);">
                    <p style="margin: 0; color: #1e293b; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">
                      ${body.message}
                    </p>
                  </div>
                </div>

              </div>

              <!-- Priority Notice -->
              <div style="background: linear-gradient(135deg, #F4B942/10 0%, #F4B942/5 100%); border: 2px solid #F4B942/30; border-radius: 12px; padding: 20px; margin-bottom: 30px; text-align: center;">
                <p style="margin: 0; color: #4059AD; font-size: 16px; font-weight: 600;">
                  ⚡ <strong>High Priority Lead</strong> - Respond within 24 hours for optimal conversion
                </p>
              </div>

              <!-- Action Buttons -->
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; margin: 0 10px;">
                  <a href="mailto:${body.email}?subject=Re: Your Real Estate Investment Inquiry&body=Dear ${body.firstName},%0D%0A%0D%0AThank you for your interest in MLGG's premium lead generation services..." 
                     style="display: inline-block; background: linear-gradient(135deg, #4059AD 0%, #6B9AC4 100%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(64, 89, 173, 0.3); margin: 5px;">
                    📧 Reply to ${body.firstName}
                  </a>
                </div>
                ${body.phone ? `
                <div style="display: inline-block; margin: 0 10px;">
                  <a href="tel:${body.phone}" 
                     style="display: inline-block; background: linear-gradient(135deg, #F4B942 0%, #F4B942/80 100%); color: #4059AD; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(244, 185, 66, 0.3); margin: 5px;">
                    📞 Call ${body.firstName}
                  </a>
                </div>
                ` : ''}
              </div>

              <!-- Lead Source & Timestamp -->
              <div style="text-align: center; padding-top: 20px; border-top: 2px solid #97D8C4/20;">
                <p style="margin: 0 0 10px 0; color: #4059AD; font-size: 14px; font-weight: 600;">
                  📊 Lead Source: MLGG Website Contact Form
                </p>
                <p style="margin: 0; color: #64748b; font-size: 14px;">
                  Received on ${new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </p>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #4059AD 0%, #6B9AC4 100%); padding: 30px; text-align: center;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #ffffff; margin: 0 0 5px 0; font-size: 24px; font-weight: bold;">
                  MLGG
                </h3>
                <p style="color: #97D8C4; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                  MaVoid Lead Generation Group
                </p>
                <p style="color: #ffffff; margin: 0; font-size: 14px; opacity: 0.9;">
                  Premium Real Estate Lead Generation • Internationally Verified
                </p>
              </div>
              
              <!-- International Verification -->
              <div style="margin-bottom: 20px; padding: 15px; background-color: rgba(255,255,255,0.1); border-radius: 8px;">
                <p style="color: #F4B942; margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                  Internationally Verified Across
                </p>
                <p style="color: #ffffff; margin: 0; font-size: 20px;">
                  🇴🇲 🇸🇦 🇪🇬 🇦🇪
                </p>
              </div>

              <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px;">
                <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 12px;">
                  © ${new Date().getFullYear()} MaVoid Lead Generation Group. All rights reserved.
                </p>
              </div>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Email Error:", error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to send email" 
    });
  }
}
