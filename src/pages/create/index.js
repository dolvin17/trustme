import Proposal from "@/components/proposal";
import SecondNav from "@/components/secondnav";
import Link from "next/link";
import { useState } from 'react';

export default function Create() {
	const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/closed state
	const handleCreateCandidate = () => {
		// Simulate candidate creation (replace with actual logic)
		console.log('Candidate created!');
		setIsModalOpen(true); // Open modal on successful creation
	  };
	
	  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="fixed flex flex-col items-center justify-center w-1/2 mx-auto mt-16 inset-2 window">
        <strong className="text-3xl text-black">
          Create proposal candidate
        </strong>
        <div className="mb-16 bg-white border-2 border-black rounded-xl">
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
            className="text-xl text-black bg-transparent"
          ></input>
          <br />
          <br />
          <input
            placeholder="##Sumary
			
			Insert your summary here
			
		"
            className="py-8 text-xl text-black bg-transparent"
          ></input>
          <input
            placeholder="##Methodology
			
			Insert your methodology here
			
		"
            className="py-8 text-xl text-black bg-transparent"
          ></input>
          <input
            placeholder="##Conclusion
			
			Insert your conclusion here
			
		"
            className="py-8 text-xl text-black bg-transparent"
          ></input>
          <Link href="/create " onClick={handleCreateCandidate}>
            <button className="p-4 mt-0 text-white bg-black">
              {" "}
              Create a Candidate{" "}
            </button>
          </Link>
        </div>
		{isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="mb-2 text-xl font-bold">Success!</h2>
              <p className="text-lg text-black">Candidate created successfully.</p>
              <button className="p-2 text-white bg-green-500 rounded-lg" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
