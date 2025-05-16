import {z} from 'zod'

export const loginSchema = z.object({
    username: z.string().min(6, "Username must be at least 6 characters").max(20, "username must be under 20 characters"),
    password: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be under 20 characters"),
})

export const registerSchema = z.object({
    username: z.string().min(6, "Username must be at least 6 characters").max(20, "username must be under 20 characters"),
    password: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be under 20 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be under 20 characters")
}).refine((val) => val.password === val.confirmPassword, {
    message: "Passwords don't match",
    path:["confirmPassword"]
})