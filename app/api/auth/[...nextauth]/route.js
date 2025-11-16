import { Auth } from "@auth/core";
import GoogleProvider from "@auth/core/providers/google";
import GitHubProvider from "@auth/core/providers/github";

export const GET = async (req) => {
  return Auth(req, {
    providers: [
      GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
      GitHubProvider({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
      }),
    ],
    secret: process.env.AUTH_SECRET,
    debug: true,
    trustHost: true, // avoids "UntrustedHost" on localhost
  });
};

export const POST = GET;
