import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={getImagePath("/images/logo/logoneo.png")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
