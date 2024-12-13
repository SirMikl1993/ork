import Link from "next/link";

export default function Home() {
  return (
      <>
        <Link href={'/product'}>Products</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <h1>Welcome to the Home page!</h1>
      </>
  );
}
