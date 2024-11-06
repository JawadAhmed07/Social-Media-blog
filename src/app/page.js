import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div>
      <Header />
      <Image
        className="dark:invert w-96 h-12 pt-24 "
        src="/bg.jpg"
        alt="Next.js logo"
        // width={1400}
        // height={500}
        fill={true}
        priority
      />
    </div>

  );
}

// <Image
// className="dark:invert"
// src="/first.png"
// alt="Next.js logo"
// width={180}
// height={38}
// priority
// />