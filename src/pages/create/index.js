import Proposal from "@/components/proposal";
import SecondNav from "@/components/secondnav";
import Link from "next/link";

export default function Create() {
  return (
    <>
      <div className="fixed flex flex-col items-center justify-center w-1/2 mx-auto inset-2 window">
        <strong className="text-3xl">Create proposal candidate</strong>
        <div className="bg-white border-2 border-black rounded-xl">
          <p className="p-4 text-lg text-black ">
            Proposal candidates can be created by anyone. If a candidate
            receives enough signatures by Weasel voters, it can be promoted to a
            proposal. Submissions require 2 WSL on deposit.
          </p>
        </div>
        <div className="flex flex-col w-full p-4 mx-auto bg-white border-2 border-black bmx-auto rounded-xl">
          <strong className="text-xl text-black ">Candidate</strong>
          <input
            placeholder="title"
            className="text-xl text-gray-200 bg-transparent"
          ></input>
          <br />
          <br />
          <input
            placeholder="##Sumary
			
			Insert your summary here
			
		"
            className="py-8 text-xl text-gray-200 bg-transparent"
          ></input>
          <input
            placeholder="##Methodology
			
			Insert your methodology here
			
		"
            className="py-8 text-xl text-gray-200 bg-transparent"
          ></input>
          <input
            placeholder="##Conclusion
			
			Insert your conclusion here
			
		"
            className="py-8 text-xl text-gray-200 bg-transparent"
          ></input>
          <Link href="/create">
            <button className="p-4 mt-0 text-white bg-black">
              {" "}
              Create a Candidate{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
