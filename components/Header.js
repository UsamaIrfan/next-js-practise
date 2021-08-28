import Link from 'next/link';
import Image from "next/image"

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Image src={"/usama-irfan.png"} width={250} height={40} alt="Logo" />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    </nav>
);
}
 
export default Header;