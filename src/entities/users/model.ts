import { z } from "zod";

import { UserProfileSchema } from "~entities/user";

export const UsersSchema = z.array(UserProfileSchema);

export type TUsers = z.infer<typeof UsersSchema>;
