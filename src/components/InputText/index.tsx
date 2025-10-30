import { useId } from "react";

type InputTextProps = {
  labelText?: string;
  type?: string;
} & React.ComponentProps<"input">;

export default function InputText({
  labelText = "",
  type = "text",
  ...props
}: InputTextProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        {...props}
        className={`bg-white outline-0 text-base/tight ring-2 ring-slate-400 rounded p-2 transition focus:ring-blue-600 disabled:bg-slate-200 read-only:bg-slate-200 ${props.className}`}
        id={id}
        type={type}
      />
    </div>
  );
}
