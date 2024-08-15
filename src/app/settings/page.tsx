import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
};

import SettingsPage from './SettingsPage';

const Page = () => {
  return <SettingsPage />;
};

export default Page;
