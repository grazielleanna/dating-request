import Image from 'next/image'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Dating Request',
  description: 'Site para pedido de namoro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24 bg-blue">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            {/* <p className="fixed left-0 top-0 text-white flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:text-black lg:p-4 lg:dark:bg-zinc-800/30">
              Dating request ❤️
            </p> */}
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="text-white pointer-events-none flex justify-end place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By {' '}
                <Image
                  src="/images/logo.svg"
                  alt="Grazielle Logo"
                  className="dark:invert w-3/12"
                  width={610}
                  height={185}
                  priority
                />
              </a>
            </div>
          </div>
          <div className='bg-white px-5 py-8 shadow-md shadow-white w-96 text-center rounded-lg container relative'>
            {children}
          </div>
          <div></div>
        </main>
      </body>
    </html>
  )
}
