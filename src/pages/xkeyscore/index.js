import React, { useState } from "react";
import "98.css";


export default function Xkeyscore() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state variable
  const [vote, setVote] = useState(null); // Vote state variable
  const [isPublished, setIsPublished] = useState(false); // Published state variable
  const [isLoading, setIsLoading] = useState(false); // Loading state variable
  const [isSubmittingVote, setIsSubmittingVote] = useState(false); // State for button text

  const handleOpenModal = () => setIsModalOpen(true); // Function to open modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVote(null); // Reset vote on modal close
  };
  const handleVote = (voteOption) => {
	setIsSubmittingVote(true);
    setIsLoading(true); // Simulate vote submission time
    setTimeout(() => {
      setIsPublished(true);
      setVote(voteOption);
      setIsLoading(false);
	  setIsSubmittingVote(false);
    }, 3500); // Simulate delay for 1.5 seconds
  };
  const renderVoteSuccessModal = () =>
    isPublished && (
      <div className="window fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 flex-col">
        <div className="title-bar">
          <div className="title-bar-text text-xl w-[200px]">Status</div>
          <div className="title-bar-controls">
            <button
              onClick={() => setIsPublished(false)}
              aria-label="Close"
            ></button>
          </div>
        </div>

        <div className="window-body w-[245px] text-sm pt-4 bg-gray-200 -mt-0 text-black">
          <strong className="p-2">Vote Submitted Successfully!</strong>
          <p className="p-4"> Your vote has been registered.</p>
        </div>
      </div>
    );

  return (
    <>
      <div className="mt-32 mb-8 w-1/2 flex items-center justify-center p-4 flex-col mx-auto text-black  text-2xl window">
        <div className="flex items-center justify-between w-1/2  gap-2 flex-row    ">
          <h2 className="text-gray-700 mt-4 font-bold">Proposal 1</h2>
          <span className="rounded-xl text-sm bg-lime-400 p-2 translate-y-2">
            Active
          </span>
        </div>
        <div className="flex flex-row gap-4 items-center ">
          <strong className="my-4">
            Xkeyscore: is a system which enables almost unlimited surveillance
            of anyone anywhere in the world
          </strong>
          <button
            className="bg-cyan-200 text-sm rounded-lg p-2 w-[200px] h-[30px] text-center"
            onClick={handleOpenModal}
          >
            Submit a vote
          </button>
        </div>
        <p>
          XKeyscore (XKEYSCORE or XKS) is a secret computer system used by the
          United States National Security Agency (NSA) for searching and
          analyzing global Internet data, which it collects in real time. The
          NSA has shared XKeyscore with other intelligence agencies, including
          the Australian Signals Directorate, Canada{"'"}s Communications
          Security Establishment, New Zealand{"'"}s Government Communications
          Security Bureau, Britain{"'"}s Government Communications Headquarters,
          Japan{"'"}s Defense Intelligence Headquarters, and Germany{"'"}s
          Bundesnachrichtendienst.
          <br />
          You could read anyone{"'"}s email in the world, anybody you{"'"}ve got
          an email address for. Any website: You can watch traffic to and from
          it. Any computer that an individual sits at: You can watch it. Any
          laptop that you{"'"}re tracking: you can follow it as it moves from
          place to place throughout the world. It{"'"}s a one-stop-shop for
          access to the NSA{"'"}s information. ... You can tag individuals ...
          Let{"'"}s say you work at a major German corporation and I want access
          to that network, I can track your username on a website on a forum
          somewhere, I can track your real name, I can track associations with
          your friends and I can build what{"'"}s called a fingerprint, which is
          network activity unique to you, which means anywhere you go in the
          world, anywhere you try to sort of hide your online presence, your
          identity.
        </p>
      </div>
      {isModalOpen && (
        <div className="fixed window inset-0 flex-col bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="title-bar ">
          <div className="title-bar-text w-[200px] text-xl">Vote on KeyScore</div>
          <div className="title-bar-controls  ">

      <button aria-label="Close" onClick={handleCloseModal} ></button>
    </div>
	</div>
            <div className="flex flex-row window-body gap-2 h-[90px] w-[245px] text-sm pt-4 bg-gray-200 -mt-0 text-black items-center justify-center ">
			{isSubmittingVote ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-lime-600 animate-pulse"></div>
                  <span className="ml-2 text-black">Submitting vote...</span>
                </div>
              ) : (
                <>
                  <button className="bg-green-500 text-white rounded-lg p-2" onClick={handleVote}>
                    Publish
                  </button>
                  <button className="bg-red-500 text-white rounded-lg p-2" onClick={handleVote}>
                    Not Publish
                  </button>
                </>
              )}
            </div>
          </div>
      )}
      {renderVoteSuccessModal()}
    </>
  );
}
