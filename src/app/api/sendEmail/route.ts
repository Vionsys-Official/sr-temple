import transporter from '@/lib/transporter';

export async function POST(request: Request) {
  try {
    const {
      firstname, lastname, email, mobile, subject, message,
    } = await request.json();
    // Setup email data
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'svansh880@gmail.com',
      subject: 'SR temple website contact query',
      html: `
        <h2 style="font-weight: bold;">Hello, you have a new contact query from SR-Temple Construction</h2>
        <h3><span style="font-weight: bold;">First Name:</span> <span style="font-weight: lighter;">${firstname}</span></h3>
        <h3><span style="font-weight: bold;">Last Name:</span> <span style="font-weight: lighter;">${lastname}</span></h3>
        <h3><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${email}</span></h3>
        <h3><span style="font-weight: bold;">Number:</span> <span style="font-weight: lighter;">${mobile}</span></h3>
        <h3><span style="font-weight: bold;">Subject:</span> <span style="font-weight: lighter;">${subject}</span></h3>
        <h3><span style="font-weight: bold;">Message:</span> <span style="font-weight: lighter;">${message}</span></h3>
      `,
    };
    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully', success: true }), { status: 200 });
  } catch (error: any) {
    return Response.json({ message: 'Something went wrong!', success: false, error: error.message }, { status: 500 });
  }
}

const handlers = {
  POST,
};

export default handlers;
