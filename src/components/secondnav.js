import Link from "next/link";

export default function SecondNav() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-1/2 gap-4 mx-auto mb-8 text-2xl text-black window">
        <Link
          href="/proposals"
          className="px-2 hover:underline hover:font-black"
        >
          Proposals
        </Link>
        <Link href="/candidates" className="px-2 hover:underline hover:font-black">
          Candidates
        </Link>
        <Link href="/submit" className="px-2 hover:underline hover:font-black">
          Submit Proposal
        </Link>
      </div>
    </>
  );
}
