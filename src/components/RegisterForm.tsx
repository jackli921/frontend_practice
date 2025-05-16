"use client";

import { z } from "zod";
import { registerSchema } from "../schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues:{
        username:"",
        password:"",
        confirmPassword:""
    }
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    // async request to backend
    console.log(values);
  }

  // <Form> - pass the returned form object form useForm hook to make it available to other nested form components using react context
  // onSubmit = {form.handleSubmit(onsubmit)} part of the native HTML form, but onSubmit attribute
  // when you place <FormMessage/> inside a <FormItem>, which is inside part of a <FormField> it learns which isntance to look at and which field error to look for
  // spreading ... field input <Input> component is the same as calling ...register() on the input to RHF
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col justify-center align-center">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="input your username here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="input your password here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
