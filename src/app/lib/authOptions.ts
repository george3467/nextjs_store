
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@/app/lib/data";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,


  providers: [
    CredentialsProvider({
      name: "Credentials",

      // Fields in the credentials form
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        // Return null if credentials are missing
        if (!credentials?.email || !credentials?.password) return null;

        // Query the database for a user with the given email
        const users = await sql`
          SELECT * FROM users WHERE email = ${credentials.email}
        `;
         // Compare provided password with hashed password from database
        const user = users[0];
        if (!user) return null;
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

         // If valid, return a user object that will be included in the session
        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // sign-in page path
  pages: {
    signIn: "/signin",
  },
};