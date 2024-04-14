import Proposal from "@/components/proposal";
import SecondNav from "@/components/secondnav";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";

export default function Candidates() {
  return (
    <>
      <Proposal />
      <SecondNav />
      <Link href="/stateroom">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black border-2 window rounded-xl bg-white/70 hover:bg-white">
          <div className="flex flex-col p-4 ">
            <span>
			STATEROOM contains highly secretive signals intelligence involving the interception of international radio, telecommunications and Internet traffic.
            </span>
            <strong className="py-4 text-gray-500">by 0x...1fd2</strong>
            <div className="py-2 border-t-4 border-indigo-500 ">
              <div className="flex flex-row justify-between">
                <strong>0 / 2 sponsored votes</strong>
                <p>7 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

	  <Link href="/stateroom">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black border-2 window rounded-xl bg-white/70 hover:bg-white">
          <div className="flex flex-col p-4 ">
            <span>
			The French telecommunications corporation Orange S.A. shares customer call data with the French intelligence agency DGSE, and the intercepted data is handed over to GCHQ
            </span>
            <strong className="py-4 text-gray-500">by 0x...1fd2</strong>
            <div className="py-2 border-t-4 border-indigo-500 ">
              <div className="flex flex-row justify-between">
                <strong>1 / 2 sponsored votes</strong>
                <p>12 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
	  <Link href="/stateroom">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black border-2 window rounded-xl bg-white/70 hover:bg-white">
          <div className="flex flex-col p-4 ">
            <span>
			STATEROOM contains highly secretive signals intelligence involving the interception of international radio, telecommunications and Internet traffic.
            </span>
            <strong className="py-4 text-gray-500">by 0x...1fd2</strong>
            <div className="py-2 border-t-4 border-indigo-500 ">
              <div className="flex flex-row justify-between">
                <strong>0 / 2 sponsored votes</strong>
                <p>2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
	  <Link href="/stateroom">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black border-2 window rounded-xl bg-white/70 hover:bg-white">
          <div className="flex flex-col p-4 ">
            <span>
			STATEROOM contains highly secretive signals intelligence involving the interception of international radio, telecommunications and Internet traffic.
            </span>
            <strong className="py-4 text-gray-500">by 0x...1fd2</strong>
            <div className="py-2 border-t-4 border-indigo-500 ">
              <div className="flex flex-row justify-between">
                <strong>0 / 2 sponsored votes</strong>
                <p>7 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
	  <Link href="/stateroom">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-8 text-2xl text-black border-2 window rounded-xl bg-white/70 hover:bg-white">
          <div className="flex flex-col p-4 ">
            <span>
			STATEROOM contains highly secretive signals intelligence involving the interception of international radio, telecommunications and Internet traffic.
            </span>
            <strong className="py-4 text-gray-500">by 0x...1fd2</strong>
            <div className="py-2 border-t-4 border-indigo-500 ">
              <div className="flex flex-row justify-between">
                <strong>0 / 2 sponsored votes</strong>
                <p>7 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
