"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import CustomForm from "../CustomForm"

export enum FormFieldType {
    INPUT = 'input'
}
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


const CustomerForm = () => {
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
                <div className="mb-12 space-y-4">
                    <h1 className="text-3xl">Wellcome Back ❤👏 </h1>
                    <p className="">Schedule your first appointment</p>
                </div>

                <CustomForm
                    control={form.control}
                    fieldType={FormFieldType.INPUT}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
export default CustomerForm
