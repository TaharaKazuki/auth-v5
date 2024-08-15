'use server';

import { revalidatePath } from 'next/cache';

import getSession from '@/lib/getSession';
import prisma from '@/lib/prisma';
import { UpdateProfileValues, updateProfileSchema } from '@/lib/validation';


export const updateProfile = async (values: UpdateProfileValues) => {
  const session = await getSession();
  const userId = session?.user?.id;
  if (!userId) {
    throw Error('Unauthorized');
  }

  const { name } = updateProfileSchema.parse(values);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });

  revalidatePath('/');
};
