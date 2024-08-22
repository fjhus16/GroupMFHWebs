export async function getProductByID(req) {
  try {
    console.log(req.body);
    const nodemailer = require("nodemailer");

    // Create a transporter object using the custom SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mx.huseyinonalone.com", // Custom SMTP server
      port: 587, // Common port for SMTP. Use 465 for SSL
      secure: false, // True for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER, // Your email or SMTP user
        pass: process.env.MAIL_PASS, // Your password for SMTP authentication
      },
    });

    let mailOptionsCompany = {
      from: `"${process.env.MAIL_USER}" <${process.env.MAIL_USER}>`, // Sender address
      to: "contact@huseyinonal.com", // List of recipients
      subject: "Groupmfh.com form", // Subject line
      html: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <style media="all" type="text/css">
                  body {
                    font-family: Helvetica, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    font-size: 16px;
                    line-height: 1.4;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    background-color: #f4f5f6;
                    margin: 0;
                    padding: 0;
                    color: #333;
                  }

                  table {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    border-spacing: 0;
                    border-collapse: collapse;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  }

                  td {
                    padding: 12px 15px;
                    border-bottom: 1px solid #dddddd;
                  }

                  td:first-child {
                    font-weight: bold;
                    background-color: #f8f8f8;
                    width: 150px;
                  }

                  tr:last-child td {
                    border-bottom: none;
                  }

                  .container {
                    padding: 20px;
                  }

                  .container h1 {
                    text-align: center;
                    color: #ec0867;
                    font-size: 24px;
                    margin-bottom: 20px;
                  }

                  .container p {
                    font-size: 18px;
                    margin-bottom: 10px;
                  }

                  @media only screen and (max-width: 640px) {
                    body,
                    table,
                    td,
                    p {
                      font-size: 16px !important;
                    }

                    .container {
                      padding: 10px !important;
                    }
                  }

                  @media all {
                    .ExternalClass {
                      width: 100%;
                    }

                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                      line-height: 100%;
                    }

                    .apple-link a {
                      color: inherit !important;
                      font-family: inherit !important;
                      font-size: inherit !important;
                      font-weight: inherit !important;
                      line-height: inherit !important;
                      text-decoration: none !important;
                    }

                    #MessageViewBody a {
                      color: inherit;
                      text-decoration: none;
                      font-size: inherit;
                      font-family: inherit;
                      font-weight: inherit;
                      line-height: inherit;
                    }
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <table>
                    <tbody>
                      <tr>
                        <td>İsim</td>
                        <td>${req.body.isim}</td>
                      </tr>
                      <tr>
                        <td>E-posta</td>
                        <td>${req.body.email}</td>
                      </tr>
                      <tr>
                        <td>Telefon</td>
                        <td>${req.body.telefon}</td>
                      </tr>
                      <tr>
                        <td>Şirket</td>
                        <td>${req.body.company}</td>
                      </tr>
                      <tr>
                        <td>Mesaj</td>
                        <td>${req.body.mesaj}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </body>
            </html>
              `,
    };

    // Send mail client
    transporter.sendMail(mailOptionsCompany, (error, info) => {
      if (error) {
        console.log(error);
        return false;
      }
      console.log("Message sent: %s", info.messageId);
    });
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
}

export default async function handler(req, res) {
  try {
    const response = await getProductByID(req);

    if (!response) {
      return res.status(500).json();
    }

    return res.status(200).json();
  } catch (e) {
    return res.status(500).json();
  }
}
