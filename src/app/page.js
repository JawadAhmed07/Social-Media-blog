import Image from "next/image";
import Header from "./header";
import Content from "./content";

export default function Home() {
  return (
    <div>
      <Header />
      
      <Content/>
    </div>

  );
}

{/* <Image
className="dark:invert"
src="/first.png"
alt="Next.js logo"
width={180}
height={38}
priority
/> */}