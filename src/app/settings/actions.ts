'use server';

import { UpdateProfileValues, updateProfileSchema } from '@/lib/validation';

export const updateProfile = async (values: UpdateProfileValues) => {
  const { name } = updateProfileSchema.parse(values);
};
