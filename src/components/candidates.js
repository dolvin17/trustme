import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Candidates() {
  return (
    <div className="  mb-8 w-1/2 flex items-center justify-center flex-col mx-auto text-black  text-2xl window">
      <h2 className="text-gray-700 mt-4 font-bold ">Proposals</h2>
	<div className="rounded-xl p-4 flex-row flex">
	<div className="border-r-2">
		<p className="p-3">1</p>
	</div>
      <Link href="/xkeyscore" className="px-2 hover:underline">
        Secret computer system used by the United States National Security
        Agency to search and analyze data on the Internet without prior
        authorization.
      </Link>
	  <div className="border-l-2 p-2 items-center justify-center flex flex-col text-center" >
		<p className="text-sm pb-2">
		Ends in 3 days
		</p>
<MdOutlineWatchLater className="text-xl text-center" />
	<div className="rounded-xl text-sm bg-lime-400 p-2 m-2">
		Active
	</div>
	  </div>
	</div>
    </div>
  );
}
