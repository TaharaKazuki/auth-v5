import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import SettingsPage from './SettingsPage';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Settings',
};

const Page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect('/api/auth/signin?callbackUrl=/settings');
    return null;
  }

  return <SettingsPage user={user} />;
};

export default Page;
