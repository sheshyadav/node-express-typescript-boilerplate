import { z } from 'zod';

// 1. Base Schema (The source of truth for all User fields)
export const userBaseSchema = z.object({
    id: z.number(),
    name: z.string()
        .min(2, "Name is required")
        .max(30, "Name must be no more than 30 characters")
        .refine((value) => !/\d/.test(value), {
            message: "Name cannot contain numbers",
        }),
    email: z.string().email().nonempty({ message: "Email is required" }).toLowerCase(),
    password: z.string().nullable().default(null),
    avatar: z.string().nullable().default(null),
    phone: z.string().nullable().default(null),
    role: z.enum(['admin', 'user']).default('user'),
    status: z.enum(['active', 'inactive', 'pending']).default('active'),
    verifiedAt: z.date().nullable().default(null),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
});

// 2. Register DTO (Only name, email and password)
export const registerSchema = z.object({
    body: userBaseSchema.omit({
        id: true,
        createdAt: true,
        updatedAt: true,
    }).extend({
        password: z
            .string()
            .nonempty({ message: "Password is required" })
            .min(6, "Password must be at least 6 characters"),
    }).strict()
});

// 3. Login DTO (Only email and password)
export const loginSchema = z.object({
    body: userBaseSchema.pick({
        email: true,
        password: true
    }).extend({
        password: z.string()
    }).strict()
});

// 4. Create User DTO (Omit auto-generated fields and password optional)
export const createUserSchema = z.object({
    body: userBaseSchema.omit({
        id: true,
        createdAt: true,
        updatedAt: true,
    }).extend({
        password: z.string()
            .min(6, "Password must be at least 6 characters")
            .optional()
            .or(z.literal(""))
            .transform(v => v === "" ? null : v)
            .default(null)
    }).strict()
});

// 5. Update User DTO (Omit auto-generated fields and password optional)
export const updateUserSchema = z.object({
    body: userBaseSchema.omit({
        id: true,
        createdAt: true,
        updatedAt: true
    }).extend({
        password: z.string()
            .min(6, "Password must be at least 6 characters")
            .optional()
            .or(z.literal(""))
            .transform(v => v === "" ? null : v)
            .default(null)
    }).strict()
    //.partial() // to make all fields optional use this
});

// 6. Safe User response omit the password field
export const userResponseSchema = userBaseSchema.omit({
    password: true
});



export type User = z.infer<typeof userBaseSchema>;
export type SafeUser = z.infer<typeof userResponseSchema>;

export type LoginDTO = z.infer<typeof loginSchema>['body'];
export type RegisterDTO = z.infer<typeof registerSchema>['body'];
export type CreateUserDTO = z.infer<typeof createUserSchema>['body'];
export type UpdateUserDTO = z.infer<typeof updateUserSchema>['body'];