// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        const data = await response.json();

        if (data.success && data.token) {
          // **Return a user object with id and email (NextAuth.js needs this)**
          return { id: data.userId, email: credentials.email }; // Use credentials.email to get the email
        } else {
          return null; // Invalid credentials
        }
      },
    }),
  ],
});