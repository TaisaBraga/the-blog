import { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: string;
} & React.ComponentProps<"input">;

export default function InputCheckbox({
  labelText = "",
  type = "checkbox",
  ...props
}: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex items-center flex-row gap-3">
      <input
        {...props}
        className={`w-4 h-4 outline-0 focus:ring-2 focus:ring-blue-500 ${props.className}`}
        id={id}
        type={type}
      />
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}
