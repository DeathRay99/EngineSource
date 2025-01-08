import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    let { name, phone, email, year, brand, model, part, description } = body;

    brand = brand || "NA";
    model = model || "NA";
    part = part || "NA";
    description = description || "NA"; // If description is empty, set to "NA"
    
    const emailResponse = await resend.emails.send({
      from: "PartsStoreUS <sales@partsstoreus.com>",
      to: process.env.OWNER_EMAIL, // Replace with the owner's email
      subject: "New Quote Request",
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f9fafb;
                margin: 0;
                padding: 0;
              }
              table {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                border-collapse: collapse;
                background-color: #ffffff;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
              }
              th {
                background-color: #007bff;
                color: #ffffff;
                padding: 14px;
                text-align: left;
                font-size: 16px;
                font-weight: bold;
              }
              td {
                padding: 12px;
                text-align: left;
                border-bottom: 1px solid #ddd;
                font-size: 14px;
                color: #333;
              }
              td:first-child {
                font-weight: bold;
                color: #007bff;
              }
              tr:last-child td {
                border-bottom: none;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 12px;
                color: #777;
                font-style: italic;
              }
              .highlight {
                color: #007bff;
                font-weight: bold;
              }
              .info-container {
                margin-top: 15px;
                padding: 15px;
                background-color: #f0f9ff;
                border-left: 4px solid #007bff;
                font-size: 13px;
              }
            </style>
          </head>
          <body>
            <table>
              <tr>
                <th colspan="2">New Quote Request</th>
              </tr>
              <tr>
                <td class="highlight">Name:</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td class="highlight">Phone:</td>
                <td>${phone}</td>
              </tr>
              <tr>
                <td class="highlight">Email:</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td class="highlight">Year:</td>
                <td>${year}</td>
              </tr>
              <tr>
                <td class="highlight">Brand:</td>
                <td>${brand}</td>
              </tr>
              <tr>
                <td class="highlight">Model:</td>
                <td>${model}</td>
              </tr>
              <tr>
                <td class="highlight">Part:</td>
                <td>${part}</td>
              </tr>
              <tr>
                <td class="highlight">Description:</td>
                <td>${description}</td>
              </tr>
            </table>
            <div class="info-container">
              <p><strong>Important:</strong> This email contains a request for a quote from a potential customer. Please review the details above and follow up with the customer as soon as possible to provide the requested information.</p>
            </div>
            <div class="footer">
              <p>You received this query because someone is interested in purchasing a part from PartsStoreUS. Please ensure a prompt and accurate response to enhance customer satisfaction.</p>
            </div>
          </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!", data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
