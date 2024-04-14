import Proposal from "@/components/proposal";
import SecondNav from "@/components/secondnav";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Proposals() {
  return (
	<>
	<Proposal />
	<SecondNav />

    <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black window">
 
      <div className="flex flex-row p-4 rounded-xl">
        <div className="border-r-2">
          <p className="p-3">1</p>
        </div>
        <Link
          href="/xkeyscore"
          className="px-2 hover:underline hover:font-black"
		  >
          Secret computer system used by the United States National Security
          Agency to search and analyze data on the Internet without prior
          authorization.
        </Link>
        <div className="flex flex-col items-center justify-center p-2 text-center border-l-2">
          <p className="pb-2 text-sm">Ends in 3 days</p>
          <MdOutlineWatchLater className="text-xl text-center" />
          <div className="p-2 m-2 text-sm rounded-xl bg-lime-400">Active</div>
        </div>
      </div>
      <div className="flex flex-row p-4 rounded-xl">
        <div className="border-r-2">
          <p className="p-3">2</p>
        </div>
        <Link
          href="/xkeyscore"
          className="px-2 hover:underline hover:font-black"
        >
          PRISM requests to target communications that were encrypted when they
          traveled across the internet backbone, to focus on stored data that
          telecommunication filtering systems discarded earlier
        </Link>
        <div className="flex flex-col items-center justify-center p-2 text-center border-l-2">
          <MdOutlineWatchLater className="text-xl text-center" />
          <div className="p-2 m-2 text-sm bg-gray-300 rounded-xl">Expired</div>
        </div>
      </div>
      <div className="flex flex-row p-4 rounded-xl">
        <div className="border-r-2">
          <p className="p-3">3</p>
        </div>
        <Link
          href="/xkeyscore"
          className="px-2 hover:underline hover:font-black"
		  >
          Tempora uses intercepts on the fibre-optic cables that serve as the
          backbone of the Internet to gain access to large amounts of Internet
          users personal data, without any individual suspicion or targeting.
        </Link>
        <div className="flex flex-col items-center justify-center p-2 text-center border-l-2">
          <div className="p-2 m-2 text-sm rounded-xl bg-cyan-500">Published</div>
        </div>
      </div>
      <div className="flex flex-row p-4 rounded-xl">
        <div className="border-r-2">
          <p className="p-3">4</p>
        </div>
        <Link
          href="/xkeyscore"
          className="px-2 hover:underline hover:font-black"
		  >
          In a 30-day period from December 2012 to January 2013, MUSCULAR is
          responsible for collecting 181 million records.
        </Link>
        <div className="flex flex-col items-center justify-center p-2 text-center border-l-2">
          <p className="pb-2 text-sm">Ends in 7 days</p>
          <MdOutlineWatchLater className="text-xl text-center" />
          <div className="p-2 m-2 text-sm rounded-xl bg-lime-400">Active</div>
        </div>
      </div>
      <div className="flex flex-row p-4 rounded-xl">
        <div className="border-r-2">
          <p className="p-3">5</p>
        </div>
        <Link
          href="/xkeyscore"
          className="px-2 hover:underline hover:font-black"
		  >
          P6, As part of efforts to combat terrorism, includes a massive
          database containing personal information such as photos, license plate
          numbers, Internet search histories and telephone metadata of presumed
          jihadists.  
        </Link>
        <div className="flex flex-col items-center justify-center p-2 text-center border-l-2">
          <div className="p-2 m-2 text-sm bg-red-400 rounded-xl">Defeated</div>
        </div>
      </div>
    </div>
			</>
  );
}
