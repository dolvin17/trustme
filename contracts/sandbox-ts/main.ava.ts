import { Worker, NearAccount } from 'near-workspaces';
import anyTest, { TestFn } from 'ava';

// Global context
const test = anyTest as TestFn<{ worker: Worker, accounts: Record<string, NearAccount> }>;

test.beforeEach(async (t) => {
  // Create sandbox, accounts, deploy contracts, etc.
  const worker = t.context.worker = await Worker.init();

  // Deploy contract
  const root = worker.rootAccount;
  const contract = await root.createSubAccount('voting-contract');

  // Get wasm file path from package.json test script in folder above
  await contract.deploy(
    process.argv[2],
  );

  // Save state for test runs, it is unique for each test
  t.context.accounts = { root, contract };
});

test.afterEach.always(async (t) => {
  // Stop Sandbox server
  await t.context.worker.tearDown().catch((error) => {
    console.log('Failed to stop the Sandbox:', error);
  });
});

// Test for voting functionality
test('allows voting and prevents duplicate votes', async (t) => {
  const { contract, root } = t.context.accounts;

  // Vote with a new user
  const vote = 'Option A';
  await root.call(contract, 'vote', { vote });
  const greeting = await contract.view('getResults', {}); // assuming getResults returns vote counts

  // Check if vote is registered
  t.truthy(greeting.(result => result.vote === vote));

  // Attempt to vote again with the same user (should throw error)
  try {
    await root.call(contract, 'vote', { vote });
    t.fail('Should not allow duplicate votes');
  } catch (error) {
    t.is(error.message, "this weasel already voted!");
  }
});

// Test for getting vote results
test('returns accurate vote results', async (t) => {
  const { contract, root } = t.context.accounts;

  // Vote with multiple users
  const votes = ['Option A', 'Option B', 'Option A'];
  for (const vote of votes) {
    await root.call(contract, 'vote', { vote });
  }

  const results = await contract.view('getResults', {});

  // Check vote counts
  const expectedResults = {
    'Option A': 2,
    'Option B': 1,
  };
  t.deepEqual(results, expectedResults);
});
