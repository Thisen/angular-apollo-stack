import { mutationSchema } from './mutationSchema';
import { querySchema } from './querySchema';
import { rootSchema } from './rootSchema';
import { userSchema } from './userSchema';

export const aggregatedSchemas = [
  rootSchema,
  querySchema,
  mutationSchema,
  userSchema,
];
