import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h2>Hello, master!</h2>
    <p>You just got an email from:</p>
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
      <li>Message: {message}</li>
    </ul>
  </div>
);
