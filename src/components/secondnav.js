import Link from 'next/link';

export default function SecondNav() {
	return (
		<>
		<div className=" mb-8 w-1/2 flex  items-center justify-center flex-row gap-4 mx-auto text-black  text-2xl window">
			
		<Link
          href="/proposals"
          className="px-2 hover:underline hover:font-black"
        >
         Proposals
        </Link>
		<button href="/proposals" className="px-2 hover:underline hover:font-black text-2xl text-black"> Candidates </button>
		<button href="/proposals" className="px-2 hover:underline hover:font-black text-2xl text-black"> Submit Proposal </button>
		</div>
		</>
	)
}