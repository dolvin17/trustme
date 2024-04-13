"use client";
import { DocsCard, HelloComponentsCard } from "@/components/cards";
import { useWallet } from "@/wallets/wallet-selector";
import { useState, useEffect } from "react";
import { HelloNearContract, NetworkId } from "../../config";
import styles from "@/styles/app.module.css";

// Contract that the app will interact with
const CONTRACT = HelloNearContract[NetworkId];

export default function HelloNear() {
  const { signedAccountId, viewMethod, callMethod } = useWallet();

  const [votting, setvotting] = useState("loading...");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    viewMethod &&
      viewMethod(CONTRACT, "vote", {}).then((votting) =>
        setvotting(votting)
      );
  }, [viewMethod]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  const savevotting = async () => {
    setShowSpinner(true);
    await callMethod(CONTRACT, "set_votting", { votting });
    setShowSpinner(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Interacting with the contract: &nbsp;
          <code className={styles.code}>{CONTRACT}</code>
        </p>
      </div>

      <div className={styles.center}>
        <h1 className="w-100">
          {" "}
          The contract says: <code>{votting}</code>{" "}
        </h1>
        <div className="input-group" hidden={!loggedIn}>
          <input
            type="text"
            className="form-control w-20"
            placeholder="Store a new votting"
            onChange={(t) => {
              setvotting(t.target.value);
            }}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" onClick={savevotting}>
              <span hidden={showSpinner}> Save </span>
              <i
                className="spinner-border spinner-border-sm"
                hidden={!showSpinner}
              ></i>
            </button>
          </div>
        </div>
        <div className="w-100 text-end align-text-center" hidden={loggedIn}>
          <p className="m-0"> Please login to change the votting </p>
        </div>
      </div>
      <div className={styles.grid}>
        <DocsCard />
        <HelloComponentsCard />
      </div>
    </main>
  );
}
