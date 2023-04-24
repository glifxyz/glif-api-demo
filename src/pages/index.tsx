import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const runGlif = async () => {
    setIsLoading(true);

    // TODO get some cool data from the user
    const data = {
      id: "clgu1mc6h0008jq08altzl4ih",
      input: "alligator crocodile snakeskin leather",
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
    const json = await res.json();

    // TODO do something cool with the output
    console.log({ output });
    // alert(output?.output);
    setOutput(json?.output);

    setIsLoading(false);

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
          disabled={isLoading}
        >
          {(isLoading && <h1>Loading...</h1>) || "Run Glif"}
        </button>
      </div>
      <div className="w-full text-2xl">
        {output}
        {output && <img src={output.output} />}
      </div>
    </main>
  );
}
