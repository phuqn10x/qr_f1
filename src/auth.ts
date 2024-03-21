import { AuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { connectToDatabase } from "./lib/server/mongodb";
const auth: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.clientId!,
      clientSecret: process.env.clientSecret!,
    }),
  ],
  adapter: MongoDBAdapter(
    connectToDatabase().then((res) => res.client),
    {
      databaseName: "lc_auth",
    },
  ) as Adapter,
  callbacks: {
    session: async ({ session, user }) => {
      console.log(session);
      // session.user.id = user.id;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },
};

export default auth;
