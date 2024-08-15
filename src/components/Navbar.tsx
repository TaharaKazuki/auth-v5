'use client';

import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

import { Button } from './ui/button';
import UserButton from './UserButton';

const Navbar = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth V5
        </Link>
        {user && <UserButton user={user} />}
        {!user && session.status !== 'loading' && <SignInButton />}
      </nav>
    </header>
  );
};

export default Navbar;

const SignInButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};
