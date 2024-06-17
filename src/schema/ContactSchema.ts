// contactschema.ts
import { z } from 'zod';

const contactschema = z.object({
  firstname: z
    .string()
    .min(3, { message: 'Firstname must be 3 or more characters long' })
    .max(15, { message: 'Firstname must be 15 or less characters long' }),
  lastname: z
    .string()
    .min(3, { message: 'Lastname must be 3 or more characters long' })
    .max(10, { message: 'Lastname must be 10 or less characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  mobile: z.string()
    .regex(/^\+\d{1,3}\d{7,15}$/, 'Mobile number must start with a country code and contain only numbers')
    .transform((val) => val.replace(/\s+/g, '')), // Remove spaces if any
  subject: z
    .string()
    .min(10, { message: 'Subject must be 10 or more characters long' })
    .max(50, { message: 'Subject must be 50 or less characters long' }),
  message: z
    .string()
    .min(20, { message: 'Message must be 20 or more characters long' })
    .max(100, { message: 'Message must be 100 or less characters long' }),
});

export default contactschema;
