// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view } from "near-sdk-js";

// Define the contract state structure
class VoteData {
  constructor(
    public vote: string,
    public voter_id: string,
    public timestamp: bigint
  ) {}
}

@NearBindgen({})
export class Contract {
  private votes: VoteData[] = [];

  // Constructor (automatically called on contract creation)
  constructor() {
    // Nothing to initialize here
  }

  // Function to handle voting
  @call({})
  public vote(vote: string): void {
    const accountId = near.predecessorAccountId();
    const timestamp = near.blockTimestamp();

    // Check for existing vote from this account
    const existingVote = this.votes.find((v) => v.voter_id === accountId);
    if (existingVote) {
      throw new Error("this weasel already voted!");
    }

    // Store the vote
    this.votes.push(new VoteData(vote, accountId, timestamp));
    near.log(`Vote registered: ${accountId} - ${vote}`);
  }

  // Function to get vote results
  @view({})
  public getResults(): VoteCount[] {
    const voteCounts = this.votes.reduce((acc, vote) => {
      acc[vote.vote] = (acc[vote.vote] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(voteCounts).map(([vote, count]) => ({ vote, count }));
  }
}

// Define an interface for vote results
interface VoteCount {
  vote: string;
  count: number;
}
