const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nahoulaben3@gmail.com',     // Sender's email address
    pass: 'g m c a n x o u s l k j d p t i'            // Sender's email password or an app-specific password
  }
});

// Email data
const mailOptions = {
  from: 'nahoulaben3@gmail.com',     // Sender's email address
  to: 'bnhmida.nihel@gmail.com', // Recipient's email address
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.'
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
