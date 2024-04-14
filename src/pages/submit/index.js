import Proposal from "@/components/proposal";
import SecondNav from "@/components/secondnav";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Submit() {
  return (
	<>
	<Proposal />
	<SecondNav />

    <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black window">
 
     <strong className="p-2">
	 About Proposal Candidates:
		</strong>
	 <p className="p-3 mb-8">
	 Proposal candidates can be created by anyone. If a candidate receives enough signatures by Weasel voters, it can be promoted to a proposal.
	 </p>
	 <Link href="/create">
	 <button className="p-2 text-white bg-black"> Create a Candidate </button>
	 </Link>
    </div>
			</>
  );
}
