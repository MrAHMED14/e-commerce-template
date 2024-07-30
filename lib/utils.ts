import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

import ky from "ky"

// ================================================
// =============* Schema Validations *=============
// ================================================

const requiredString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, - and _ allowed"
  ),
  password: requiredString.min(8, "Must be at least 8 characters"),
})

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
})

export const orderFormSchema = z.object({
  street: requiredString,
})

export type OrderFormValues = z.infer<typeof orderFormSchema>
export type SignUpValues = z.infer<typeof signUpSchema>
export type LoginValues = z.infer<typeof loginSchema>

// ================================================

// ================================================
// ===============* Utils Functions *==============
// ================================================

export function slugify(input: string): string {
  // handle '+', '-' and other symbols cases.
  return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// ================================================

// ================================================
// ===============* Other Stuff *==============
// ================================================

const kyInstance = ky.create({
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At")) return new Date(value)
      return value
    }),
})

export default kyInstance

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ================================================
