/* eslint-disable import/no-extraneous-dependencies */
import { z } from 'zod';

const contactschema = z.object({
  firstname: z
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .max(15, { message: 'Must be 15 or less characters long' }),
  lastname: z
    .string()
    .min(3, { message: 'Must be 3 or more characters long' })
    .max(10, { message: 'Must be 10 or less characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z
    .string()
    .min(10, { message: 'Must be 10 or more characters long' })
    .max(50, { message: 'Must be 50 or less characters long' }),
  message: z
    .string()
    .min(0, { message: 'Must be 20 or more characters long' })
    .max(100, { message: 'Must be 100 or less characters long' }),
});
