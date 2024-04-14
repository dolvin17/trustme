import Link from "next/link";

export default function Proposal() {
  return (
	<div className="mt-32 mb-8 w-1/2 flex items-center justify-center p-4 flex-col mx-auto text-black  text-2xl window">
		<h2 className="text-gray-700 mt-4 font-bold ">Governance</h2>
		<h1 className="font-bold text-3xl">Weasel DAO</h1>
      <p className="pt-8">
        Weasel govern Weasel DAO. 
		<br/>
		Weasel can vote on proposals in order to
        decide if some info should be public or no. A minimum of 3 Weasel is
        required to submit proposals.
      </p>
	  <div className="rounded-xl border-2 m-1 p-1 mt-4 border-black flex flex-row flex-grow">
	<p><strong>Treasury:</strong> 12033333.33 WSL
		</p>
		<p><strong>Value:</strong>  $16,446,139.00</p>
		<p className="text-xs"> *This treasury exists for Weasel DAO participants to allocate resources for the long-term growth and prosperity of the Weasel project.</p>
	  </div>
    </div>
  );
}
