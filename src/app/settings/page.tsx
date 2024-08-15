import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import SettingsPage from './SettingsPage';
import getSession from '@/lib/getSession';

export const metadata: Metadata = {
  title: 'Settings',
};

const Page = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect('/api/auth/signin?callbackUrl=/settings');
    return null;
  }

  return <SettingsPage user={user} />;
};

export default Page;
