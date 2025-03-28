/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/CustomerForm"
import Image from "next/image"
import { Textarea } from "./ui/textarea"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
interface CustomProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderInput = ({ field, props }: { field: any, props: CustomProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            height={24}
                            width={24}
                            alt={props.iconAlt || "icon"}
                            className="ml-2 mr-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className=" border-0 bg-black/80 rounded-xl focus:outline-none focus:ring-0 overflow-hidden"
                        />
                    </FormControl>
                </div>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <Textarea
                        placeholder={props.placeholder}
                        {...field}
                        className=""
                        disabled={props.disabled}
                    />
                </FormControl>
            );
        case FormFieldType.PHONE_INPUT:
            return (

                <FormControl>
                    <PhoneInput
                        defaultCountry="VN"  // Đổi từ "US" thành "VN"
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className=" h-[36px] rounded-md pl-2 text-sm border placeholder:text-white border-dark-500 ring-1 ring-white text-gray-600 "

                    />
                </FormControl>

            );
        // case FormFieldType.CHECKBOX:
        // return (
        //     <FormControl>
        //         <div className="flex items-center gap-4">
        //             <Checkbox
        //                 id={props.name}
        //                 checked={field.value}
        //                 onCheckedChange={field.onChange}
        //             />
        //             <label htmlFor={props.name} className="checkbox-label">
        //                 {props.label}
        //             </label>
        //         </div>
        //     </FormControl>
        // );
        // case FormFieldType.DATE_PICKER:
        //   return (
        //     <div className="flex rounded-md border border-dark-500 bg-dark-400">
        //       <Image
        //         src="/assets/icons/calendar.svg"
        //         height={24}
        //         width={24}
        //         alt="user"
        //         className="ml-2"
        //       />
        //       <FormControl>
        //         <ReactDatePicker
        //           showTimeSelect={props.showTimeSelect ?? false}
        //           selected={field.value}
        //           onChange={(date: Date) => field.onChange(date)}
        //           timeInputLabel="Time:"
        //           dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
        //           wrapperClassName="date-picker"
        //         />
        //       </FormControl>
        //     </div>
        //   );
        // case FormFieldType.SELECT:
        //   return (
        //     <FormControl>
        //       <Select onValueChange={field.onChange} defaultValue={field.value}>
        //         <FormControl>
        //           <SelectTrigger className="shad-select-trigger">
        //             <SelectValue placeholder={props.placeholder} />
        //           </SelectTrigger>
        //         </FormControl>
        //         <SelectContent className="shad-select-content">
        //           {props.children}
        //         </SelectContent>
        //       </Select>
        //     </FormControl>
        //   );
        // case FormFieldType.SKELETON:
        //   return props.renderSkeleton ? props.renderSkeleton(field) : null;
        default: return null;
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomForm = (props: CustomProps) => {
    const { control, fieldType, name, label } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1 mb-4">
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderInput field={field} props={props} />
                    <FormMessage className="" />
                </FormItem>
            )}
        />
    )
}

export default CustomForm