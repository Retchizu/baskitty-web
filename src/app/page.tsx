import "@/app/globals.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="font-semibold text-4xl">Welcome to Baskitty</h1>
      <div className="flex gap-10">
        <Link href={{}} className="text-2xl ">
          About
        </Link>
        <Link href={{}} className="text-2xl">
          Privacy and Policy
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
