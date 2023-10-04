import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
        <Link href={"/demo"}>To Demo</Link>
        <Link href={"/example"}>To Example</Link>
    </main>
  )
}
