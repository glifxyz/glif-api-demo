import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const runGlif = async () => {
    const res = await fetch("/api/glif");
    const data = await res.json();
    console.log({ data });
    return data;
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid text-center lg:grid-cols-2 lg:text-left mt-16">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Run Glif
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Oreos: great cookie or greatest cookie?
          </p>
        </div>
      </div>
    </main>
  );
}
