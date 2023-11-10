import Image from "next/image";
import { Inter } from "next/font/google";
import { Football } from "@/components/football/Football";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Football />
    </>
  );
}
