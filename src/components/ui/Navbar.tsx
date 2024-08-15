import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          Next-Auth V5
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
