import LogoImage from "@logos/black.svg";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14 ">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center text-xl font-bold font-serif justify-center "
        >
          {/* <Image
            priority
            src={LogoImage}
            alt="logo"
            width={25}
            height={25}
            className=" dark:filter dark:invert "
          />
          {"-"} */}
          Chat With Anyone
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
