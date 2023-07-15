'use client'

import { useRouter } from "next/navigation";
import Swal from "sweetalert2"

export default function ValidatedPage() {
    const router = useRouter();

    function handleButtonNo() {
        Swal.fire({
            title: 'Você não tem essa opção.',
            icon: 'error',
            timer: 3000
        });
    }

    return (
        <div>
            <h2 className="text-2xl font-bold">
                Oi, Sthe. Finalmente te encontrei!
            </h2>

            <div className="my-5">
                <p>Eu sei que você deve está com muita vontade de saber o motivo de estar aqui.</p>
                <p className="mt-3">Mas, para isso você passará por alguns desafios durante essa jornada.</p>

                <p className="font-semibold mt-3">Você está preparada?</p>
            </div>

            <div className="flex gap-4 justify-center items-center">
                <button
                    onClick={handleButtonNo}
                    className='bg-red-700 text-white border-2 border-red-700 px-5 py-1 rounded-md hover:bg-transparent hover:text-red-700 transition duration-300 ease-in disabled:opacity-50'
                >
                    Não
                </button>
                <button
                    onClick={() => router.push('/validated/progress')}
                    className='bg-green-700 text-white border-2 border-green-700 px-5 py-1 rounded-md hover:bg-transparent hover:text-green-700 transition duration-300 ease-in disabled:opacity-50'
                >
                    Sim
                </button>
            </div>
        </div>
    )
}