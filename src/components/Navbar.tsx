import Link from 'next/link';

import { Button } from './ui/button';
import UserButton from './UserButton';
import { auth, signIn } from '@/auth';
import getSession from '@/lib/getSession';

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth V5
        </Link>
        {user ? <UserButton user={user} /> : <SignInButton />}
      </nav>
    </header>
  );
};

export default Navbar;

const SignInButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn();
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
};
