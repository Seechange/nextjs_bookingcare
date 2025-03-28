"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form
} from "@/components/ui/form"
import CustomForm from "../CustomForm"
import { useState } from "react"
import SubmitButton from "../SubmitButton"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textaria',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})
const CustomerForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="mb-8 space-y-2">
                    <h1 className="text-3xl">Wellcome Back ❤👏 </h1>
                    <p className="">Schedule your first appointment</p>
                </div>

                <CustomForm
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    label="Username"
                    placeholder="DanhDev"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <CustomForm
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                    name="email"
                    label="Email"
                    placeholder="danhdev@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />
                <CustomForm
                    control={form.control}
                    fieldType={FormFieldType.PHONE_INPUT}
                    name="phone"
                    label="PhoneNumber"
                    placeholder="(+84) 123456789"

                />
                <SubmitButton isLoading={isLoading} >
                    Get Started 🚀 </SubmitButton>
            </form>
        </Form>
    )
}
export default CustomerForm
