import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Account from "../../../lib/models/account";
import mongooseInit from "../../../lib/mongooseInit";

mongooseInit();
export const authOptions: NextAuthOptions = {
  pages: {
    error: "/auth/error",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      credentials: {
        userId: {label: "userId", type: "text", placeholder: "test"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        console.log("credentials - ", JSON.stringify(credentials));
        try {
          const response: any = await fetch(
            process.env.SERVER_ADDRESS + "/api/account/signin",
            {
              method: "post",
              body: JSON.stringify(credentials),
              headers: { "Content-type": "application/json" },
            }
          );
          console.log(response.status);
          const data = await response.json();

          console.log("authorize : ", data);
          if (data) {
            const user = {
              id: data._id,
              userId: data.userId,
              nickname: data.nickname,
              email: data.email
            };
            return user;
            // return data; // next-auth 에 리턴되는 User 데이터는 토큰에 포함됨.
          } else {
            return null;
          }
        } catch (e) {
          console.log("SERVER - AUTHORIZE");
          console.log(e);
          return null;
        }
      },
    })    
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

export default NextAuth(authOptions);
