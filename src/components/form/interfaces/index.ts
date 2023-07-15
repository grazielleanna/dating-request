import { InputHTMLAttributes } from "react";
import { Control, FieldError } from "react-hook-form";

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: string;
    control: Control;
    error?: FieldError;
    label?: string;
}

export type {
    InputMaskProps
}