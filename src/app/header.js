import Image from "next/image";


export default function Header() {
    return (
        <header className="text-gray-400  body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a className="mr-5 hover:text-white">First Link</a>
      <a className="mr-5 hover:text-white">Second Link</a>
      <a className="mr-5 hover:text-white">Third Link</a>
      <a className="hover:text-white">Fourth Link</a>
    </nav> */}

                <Image
                    className="dark:invert"
                    src="/logo.png"
                    alt="Next.js logo"
                    width={60}
                    height={38}
                    priority
                />
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                </div>
            </div>
        </header>
    )
}
