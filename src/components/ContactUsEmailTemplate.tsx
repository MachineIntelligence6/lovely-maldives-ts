/* eslint-disable react/no-danger */
import React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  number: string
  message: string
}

const ContactUsEmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  number,
  message,
}) => {
  const emailTemplate = `
    <body style="background-color: #F3F3F3; font-family: 'Tajawal', serif; margin: 0; padding: 0;">
        <table 
          role="presentation" 
          width="100%" 
          style="max-width: 600px; margin: auto; background-color: #FFFFFF;"
        >
            <!-- Header Section -->
            <tr>
                <td 
                  style="
                    background-color: #967f5d; 
                    text-align: center; 
                    padding: 40px 20px; 
                    height: 180px;
                  "
                >
                    <img src="https://res.cloudinary.com/de1fnstbu/image/upload/v1719308196/lovely-maldives/lj1wsr0t9zrufbl2tjox.png" alt="Logo" style="max-width: 100%; height: 100px;">
                </td>
            </tr>
            <!-- Main Content Section -->
            <tr>
                <td style="padding: 26px; text-align: left;">
                    <h2 style="font-size: 24px; color: #111111;">Contact Us Details</h2>
                    <p 
                      style="
                        color: #111111cc; 
                        font-size: 16px; 
                        margin-bottom: 10px;
                      "
                    >
                      <strong>Name:</strong>  ${name}
                    </p>
                    <p 
                      style="
                        color: #111111cc; 
                        font-size: 16px; 
                        margin-bottom: 10px;
                      "
                    >
                      <strong>Email:</strong>  ${email}
                    </p>
                    <p 
                      style="
                        color: #111111cc; 
                        font-size: 16px; 
                        margin-bottom: 10px;
                      "
                    >
                      <strong>Phone Number:</strong>  +${number}
                    </p>
                    <p 
                      style="
                        color: #111111cc; 
                        font-size: 16px; 
                        margin-bottom: 10px;
                      "
                    >
                      <strong>Message:</strong>  ${message}
                    </p>
                </td>
            </tr>
            <!-- Footer Section -->
            <tr>
                <td style="background-color: #FFFFFF; padding: 26px; text-align: center;">
                    <table role="presentation" style="width: 100%; max-width: 520px; margin: auto;">
                        <tr>
                            <td 
                              style="
                                text-align: center; 
                                font-size: 12px; 
                                color: #884875; 
                                padding-bottom: 18px;
                              "
                            >
                                <a 
                                  href="#" 
                                  style="text-decoration: none; color: #884875;"
                                >
                                  Unsubscribe
                                </a> |
                                <a 
                                  href="#" 
                                  style="text-decoration: none; color: #884875;"
                                >
                                  Update Email Preferences
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="border-top: 1px solid #1111111a; padding-top: 18px;">
                                <p 
                                  style="color: #111111cc; font-size: 12px;"
                                >
                                  P.O. Box 97727, Dubai, UAE
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
  `

  return (
    <div>
      {/* You can display the template here, or send it somewhere */}
      <h1>Contact Us Email Template</h1>
      <div dangerouslySetInnerHTML={{ __html: emailTemplate }} />
    </div>
  )
}

export default ContactUsEmailTemplate
