'use client'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { yupResolver } from '@hookform/resolvers/yup';

import { InputMask } from "@/components/form/inputMask";
import { ValidationFormType } from "@/data/interfaces";
import { createValidationSchema } from "@/data/mocks";

export default function Validation() {
    const router = useRouter();

    const { control, handleSubmit, formState } = useForm<Partial<ValidationFormType>>({
        resolver: yupResolver(createValidationSchema() as any),
        mode: 'onChange'
    });
    const { errors } = formState;

    function onSubmit(values: Partial<ValidationFormType>) {
        const date = values.password!;

        if (date === process.env.NEXT_PUBLIC_PASSWORD) {
            Swal.fire({
                title: 'Uhuuuul 🥳!',
                text: 'Ufa, você acertou. A senha é a nossa data 🫶🏼! Vamos para os próximos passos.',
                icon: 'success',
                timer: 4000,
                timerProgressBar: true,
                showCloseButton: false,
                showConfirmButton: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    router.push('/validated/details');
                }
            })
        } else {
            Swal.fire({
                title: 'Ops!',
                text: 'A data não está correta!',
                icon: 'error',
            });
        }
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-blue mb-3">Hmmmm, será que você é realmente a Sthefany? 🤔</h1>
            <p className="text-lg">Vamos descobrir....</p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="mb-6">
                    <p className="text-lg">Insira a senha para continuar a nossa jornada:</p>
                    <InputMask
                        name="password"
                        control={control}
                        label=""
                        mask="99/99/9999"
                        placeholder="Digite aqui"
                        className="mt-5 mb-1 border border-2 border-blue max-w-sm"
                        error={errors.password}
                    />
                    <span className="underline underline-offset-4 text-xs" style={{ color: '#406E8E' }}>Dica: É uma data</span>
                </div>

                <button
                    disabled={!formState.isValid}
                    className='bg-blue text-white border-2 border-blue px-5 py-1 rounded-md hover:bg-transparent hover:text-black transition duration-300 ease-in disabled:opacity-50'
                >
                    Enviar
                </button>
            </form>

        </div>
    )
}