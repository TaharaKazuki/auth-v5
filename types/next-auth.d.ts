import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Session {
    user: User & DefaultSession['user'];
  }

  interface User {
    role: String | null;
  }
}
