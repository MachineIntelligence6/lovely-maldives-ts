/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ContactUsEmailTemplate: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
      }}
    >
      <img
        src="/placeholder.svg?height=200&width=600"
        alt="Contact Us Header"
        style={{
          width: '100%',
          height: 'auto',
          marginBottom: '20px',
        }}
      />
      <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
        <tr>
          <td
            style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h1
              style={{
                color: '#333333',
                fontSize: '24px',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              We&apos;re Here to Help
            </h1>
            <p
              style={{
                color: '#666666',
                fontSize: '16px',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              Dear Valued Customer,
            </p>
            <p
              style={{
                color: '#666666',
                fontSize: '16px',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              Thank you for your interest in contacting us. We&apos;re always
              here to assist you with any questions, concerns, or feedback you
              may have.
            </p>
            <p
              style={{
                color: '#666666',
                fontSize: '16px',
                lineHeight: '1.5',
                marginBottom: '20px',
              }}
            >
              Our dedicated support team is available Monday through Friday, 9
              AM to 5 PM EST. We strive to respond to all inquiries within 24
              hours.
            </p>
            <a
              href="#"
              style={{
                display: 'inline-block',
                backgroundColor: '#28a745',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '12px 20px',
                borderRadius: '4px',
                fontSize: '16px',
                textAlign: 'center',
              }}
            >
              Contact Us Now
            </a>
          </td>
        </tr>
      </table>
      <table
        cellPadding="0"
        cellSpacing="0"
        style={{ width: '100%', marginTop: '20px' }}
      >
        <tr>
          <td
            style={{
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2
              style={{
                color: '#333333',
                fontSize: '18px',
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              Contact Information
            </h2>
            <p
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                marginBottom: '5px',
                textAlign: 'center',
              }}
            >
              Email: support@yourcompany.com
            </p>
            <p
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                marginBottom: '5px',
                textAlign: 'center',
              }}
            >
              Phone: (123) 456-7890
            </p>
            <p
              style={{
                color: '#666666',
                fontSize: '14px',
                lineHeight: '1.5',
                textAlign: 'center',
              }}
            >
              Address: 123 Main St, City, State 12345
            </p>
          </td>
        </tr>
      </table>
      <p
        style={{
          color: '#999999',
          fontSize: '14px',
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        © 2023 Your Company. All rights reserved.
      </p>
    </div>
  )
}

export default ContactUsEmailTemplate
