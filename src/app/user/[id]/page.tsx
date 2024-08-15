import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cache } from 'react';

import prisma from '@/lib/prisma';

type PageProps = {
  params: { id: string };
};

const getUser = cache(async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: { id: true, name: true, image: true, createdAt: true },
  });
});

export const generateStaticParams = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers.map(({ id }) => ({ id }));
};

export const generateMetadata = async ({ params: { id } }: PageProps) => {
  const user = await getUser(id);
  return {
    title: user?.name || `User ${id}`,
  };
};

const Page = async ({ params: { id } }: PageProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const user = await getUser(id);

  if (!user) notFound();

  return (
    <div className="mx-3 my-10 flex flex-col items-center gap-3">
      {user.image && (
        <Image
          src={user.image}
          width={100}
          height={100}
          alt="User profile picture"
          className="rounded-full"
        />
      )}
      <h1 className="text-center text-xl font-bold">
        {user.name || `User ${id}`}
      </h1>
      <p className="text-muted-foreground">
        User since {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Page;
