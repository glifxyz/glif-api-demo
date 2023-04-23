import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const runGlif = async () => {
    // TODO get some cool data from the user
    const data = {
      id: "clfpg16y90001l908jfomwu9k",
      input: "black and white gothic horror",
    };

    // TODO set loading indicators
    // this can take 30-60s depending on the glif!

    const res = await fetch("/api/glif", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const output = await res.json();

    // TODO do something cool with the output
    console.log({ output });
    alert(output?.output);
    return data;
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="grid text-center lg:grid-cols-2 lg:text-left mt-16">
        <div className="group rounded-lg border border-transparent px-5 py-4">
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Run Glif
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Descriptive text might go here, who knows
          </p>
        </div>
        <button
          className="py-2 px-3 bg-white text-black border border-black hover:bg-gray-100"
          onClick={runGlif}
        >
          Run Glif
        </button>
      </div>
    </main>
  );
}
