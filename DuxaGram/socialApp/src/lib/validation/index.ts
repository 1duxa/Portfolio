import * as z from "zod";

export const SignupValidation = z.object({
    name:z.string().min(2,{message:"Too short"}),
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." })
      .max(50),
    email:z.string().email(),
    password:z.string().min(8,{message:"Password must be > 8 chars"})
  });
  export const SigninValidation = z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"Password must be > 8 chars"})
  });
  export const PostValidation = z.object({
caption:z.string().min(5).max(100),
file:z.custom<File[]>(),
location:z.string().min(2).max(100),
tags:z.string(),

  });
  