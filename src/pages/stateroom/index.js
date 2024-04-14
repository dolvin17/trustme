import React, { useState } from "react";
import "98.css";

export default function Stateroom() {
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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-500 bg-opacity-75 window">
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
      <div className="flex flex-col items-center justify-center w-1/2 p-4 mx-auto mt-32 mb-8 text-2xl text-black window">
        <div className="flex flex-row items-center justify-between w-1/2 gap-2 ">
          <h2 className="mt-4 font-bold text-gray-700">Proposal Candidate</h2>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <strong className="my-4">
            Summary: STATEROOM contains highly secretive signals intelligence
          </strong>
          <div className="p-2 bg-white border-2 border-black rounded-lg">
            <p>0 of 2 sponsored votes</p>
            <p className="py-2 text-xs text-gray-500">
              Proposal candidates must meet the required number of sponsored
              votes to be published.
            </p>
            <div className="flex flex-row gap-4 py-2">
              <div className="w-10 h-10 bg-blue-200 border-2 border-black border-dashed rounded-full"></div>
              <div className="w-10 h-10 bg-blue-200 border-2 border-black border-dashed rounded-full"></div>
            </div>
            <p className="text-xs">
              * Sponsoring a proposal requires at least one Weasel vote
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-4">
          <p>
            In the United States, censorship involves the suppression of speech
            or public communication and raises issues of freedom of speech,
            which is protected by the First Amendment to the United States
            Constitution. Interpretation of this fundamental freedom has varied
            since its enshrinement. Traditionally, the First Amendment was
            regarded as applying only to the Federal government, leaving the
            states and local communities free to censor or not. As the
            applicability of states rights in lawmaking vis-a-vis citizens'
            national rights began to wane in the wake of the Civil War,
            censorship by any level of government eventually came under
            scrutiny, but not without resistance. For example, in recent
            decades, censorial restraints increased during the 1950s period of
            widespread anti-communist sentiment, as exemplified by the hearings
            of the House Committee on Un-American Activities. In Miller v.
            California (1973), the U.S. Supreme Court found that the First
            Amendment's freedom of speech does not apply to obscenity, which
            can, therefore, be censored. While certain forms of hate speech are
            legal so long as they do not turn to action or incite others to
            commit illegal acts, more severe forms have led to people or groups
            (such as the Ku Klux Klan) being denied marching permits or the
            Westboro Baptist Church being sued, although the initial adverse
            ruling against the latter was later overturned on appeal to the U.S.
            Supreme Court case Snyder v. Phelps.
          </p>
          <div className="p-8 m-8 bg-white border-2  h-[250px]  min-w-48   border-black rounded-lg">
            <p className="mb-4 text-lg">Pre-proposal Feedback</p>

            <p className="p-2 text-lg font-black border-b-2 text-lime-400">0 For</p>
            <p className="p-2 text-lg font-black text-red-400 border-b-2">0 Against</p>
            <p className="p-2 text-lg font-black text-gray-500 ">0 Abstain</p>
		  <p className="mt-3 text-xs">*Weasel voters can cast voting signals to give proposers of pending proposals an idea of how they intend to vote and helpful guidance on proposal changes to change their vote.</p>
          </div>
        </div>

      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-500 bg-opacity-75 window">
          <div className="title-bar ">
            <div className="title-bar-text w-[200px] text-xl">
              Vote on KeyScore
            </div>
            <div className="title-bar-controls ">
              <button aria-label="Close" onClick={handleCloseModal}></button>
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
                <button
                  className="p-2 text-white bg-green-500 rounded-lg"
                  onClick={handleVote}
                >
                  Publish
                </button>
                <button
                  className="p-2 text-white bg-red-500 rounded-lg"
                  onClick={handleVote}
                >
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
