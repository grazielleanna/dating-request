'use client'

import Link from 'next/link'
import Swal from 'sweetalert2'

export default function Home() {

  function handleButtonNo() {
    Swal.fire({
      title: 'Ops!',
      text: 'Você não é a pessoa que estou procurando. Redirecionarei você para outro site.',
      icon: 'error',
      timer: 4000,
      timerProgressBar: true,
      showCloseButton: false,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href = `https://www.google.com.br`
      }
    })
  }

  return (
    <>
      <h1 className='text-3xl font-extrabold mb-3'>Olá!</h1>
      <h5 className='text-xl'>Antes de começar, confirme:</h5>

      <p className='mt-5 text-lg'>Você é <span className='underline transition-all transition duration-150 ease-out hover:font-bold'>Sthefany?</span></p>

      <div className='mt-8 flex gap-5 justify-center items-center'>

        <button onClick={handleButtonNo} className='bg-transparent text-blue border-2 border-blue px-8 py-2 rounded-md hover:bg-blue hover:text-white transition duration-300 ease-in'>
          Não
        </button>

        <Link href="/validation" className='bg-transparent text-blue border-2 border-blue px-8 py-2 rounded-md hover:bg-blue hover:text-white transition duration-300 ease-in'>
          Sim
        </Link>
      </div>
    </>
  )
}
