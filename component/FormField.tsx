import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, FieldValues, Control, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
  label: string;
  type?: "text" | "password" | "email" | "file";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className={label}>{name}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} type={type} value={field.value || ""}/>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
