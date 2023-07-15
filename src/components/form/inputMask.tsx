import { Controller } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { InputMaskProps } from "./interfaces";

export function InputMask({
    mask, control, name, className, placeholder, required, label, error, disabled
}: InputMaskProps) {

    return (
        <>
            <Controller
                name={name!}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <div>
                        {!!label && (
                            <label className="text-orange-600 block" htmlFor={name}>
                                {label} {required ? '*' : ''}
                            </label>
                        )}
                        <ReactInputMask
                            mask={mask}
                            onChange={onChange}
                            value={value}
                            className={`rounded-lg border-1 w-full p-2 ${className}`}
                            placeholder={(required && placeholder)
                                ? `${placeholder}*`
                                : !placeholder ? ""
                                    : placeholder
                            }
                            required={required}
                            disabled={disabled}
                        />
                    </div>
                )}
            />

            {!!error && <span className="text-red-600 my-1.5 text-center block">{error.message}</span>}
        </>
    )
}