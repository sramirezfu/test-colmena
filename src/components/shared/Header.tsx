import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="absolute top-4 left-4">
            <Link href='/' className="text-blue-500">
                <Image
                    src="/images/postsLogo1.png"
                    alt="Logotipo"
                    width={180}
                    height={60}
                />
            </Link>
        </div>
    )
}
