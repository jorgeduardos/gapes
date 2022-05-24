import { React, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useContract from "../hooks/useContract";
import ERC1155ABI from "../contracts/ERC1155.json";
import ERC721ABI from "../contracts/ERC721.json";

const OPENSTORE_ADDRESS = "0x6bf0B2674aC1215153727F5d634f63563db82cFC"; //"0x495f947276749Ce646f68AC8c248420045cb7b5e";
const GAPES_OLD_ADDRESS = "0x49ee15B6fda95DeE7C4438E894BB228d6f898240";
const MIGRATE_ADDRESS = "0xD24f02b36fb432ddF208958eEC04e1E843459D73";

const etherscanMapping = {
  1: "https://etherscan.io",
  4: "https://rinkeby.etherscan.io",
};

const openSeaMapping = {
  1: "https://opensea.io",
  4: "https://testnets.opensea.io",
};

function shortenHex(hex, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}

export default function MigrationHero() {
  const { error, activate, chainId, account, setError } = useWeb3React();

  const ENSName = useENSName(account);

  const GENESIS_CONTRACT = useContract(OPENSTORE_ADDRESS, ERC1155ABI);
  const GAPES_CONTRACT = useContract(GAPES_OLD_ADDRESS, ERC721ABI);
  const MIGRATE_CONTRACT = useContract(MIGRATE_ADDRESS, ERC721ABI);

  const [connecting, setConnecting] = useState(false);

  // Genesis Ape States
  const [genesisApeId, setGenesisApeId] = useState("");
  const [migratedGenesis, setMigratedGenesis] = useState(null);
  const [migrationGenesisTxHash, setMigrationGenesisTxHash] = useState("");
  const [genesisError, setGenesisError] = useState("");
  const [genesisApproval, setGenesisApproval] = useState(false);
  const [genesisApprovalLoading, setGenesisApprovalLoading] = useState(false);
  const [genesisMigrationLoading, setGenesisMigrationLoading] = useState(false);
  const [genesisMigrationSuccess, setGenesisMigrationSuccess] = useState(false);

  // Galactic Ape States
  const [gapeId, setGapeId] = useState("");
  const [migratedGape, setMigratedGape] = useState(null);
  const [migrationTxHash, setMigrationTxHash] = useState("");
  const [gapeError, setGapeError] = useState("");
  const [gapeApproval, setGapeApproval] = useState(false);
  const [gapeApprovalLoading, setGapeApprovalLoading] = useState(false);
  const [gapeMigrationLoading, setGapeMigrationLoading] = useState(false);
  const [gapeMigrationSuccess, setGapeMigrationSuccess] = useState(false);

  useEffect(() => {
    if (GENESIS_CONTRACT && GAPES_CONTRACT && account) {
      GENESIS_CONTRACT.isApprovedForAll(account, MIGRATE_ADDRESS)
        .then((result) => {
          console.log(result);
          setGenesisApproval(result);
        })
        .catch((e) => console.error(e));
      GAPES_CONTRACT.isApprovedForAll(account, MIGRATE_ADDRESS)
        .then((result) => {
          console.log(result);
          setGapeApproval(result);
        })
        .catch((e) => console.error(e));
    }
  }, [GAPES_CONTRACT, GENESIS_CONTRACT, account]);

  const setApproveForAll = async (type) => {
    if (GENESIS_CONTRACT && GAPES_CONTRACT && account) {
      if (type === "genesis") {
        try {
          setGenesisApprovalLoading(true);
          const tx = await GENESIS_CONTRACT.setApprovalForAll(
            MIGRATE_ADDRESS,
            !genesisApproval
          );
          await tx.wait();
          setGenesisApproval(!genesisApproval);
          setGenesisApprovalLoading(false);
        } catch (e) {
          setGenesisApprovalLoading(false);
          console.error(e);
        }
      } else {
        try {
          setGapeApprovalLoading(true);
          const tx = await GAPES_CONTRACT.setApprovalForAll(
            MIGRATE_ADDRESS,
            !gapeApproval
          );
          await tx.wait();
          setGapeApproval(!gapeApproval);
          setGapeApprovalLoading(false);
        } catch (e) {
          setGapeApprovalLoading(false);
          console.error(e);
        }
      }
    }
  };

  const migrateGenesis = async () => {
    if (MIGRATE_CONTRACT && GENESIS_CONTRACT && account && genesisApeId) {
      try {
        // if this person is not the owner, give an error
        try {
          const res = await GENESIS_CONTRACT.balanceOf(account, genesisApeId);
          if (parseInt(res.toString()) === 0) {
            setGenesisError(
              `You do not own this Genesis Ape.  Find the correct token id on OpenSea`
            );
            setGenesisMigrationLoading(false);
            return;
          }
        } catch (e) {
          setGenesisError(
            `You do not own this Genesis Ape. Find the correct token id on OpenSea`
          );
          return;
        }
        // get the new tokenID
        let res;
        try {
          res = await MIGRATE_CONTRACT.getGalacticApeId(genesisApeId);
          setMigratedGenesis(res.toNumber());
          console.log(res.toString());
        } catch (e) {
          setGenesisError(
            `Bad tokenID. Please find the correct tokenID on OpenSea.`
          );
        }
        setGenesisError("");
        setMigrationGenesisTxHash("");
        setGenesisMigrationLoading(true);
        setGenesisMigrationSuccess(false);
        const tx = await MIGRATE_CONTRACT.migrateGenesisGape(genesisApeId);
        setMigrationGenesisTxHash(tx.hash);
        await tx.wait();
        setGenesisMigrationLoading(false);
        setGenesisMigrationSuccess(true);
      } catch (e) {
        setGenesisMigrationLoading(false);
        setGenesisMigrationSuccess(false);
        console.error(e);
      }
    }
  };

  const migrateGape = async () => {
    if (MIGRATE_CONTRACT && GAPES_CONTRACT && account && gapeId) {
      try {
        // if this person is not the owner, give an error
        try {
          const res = await GAPES_CONTRACT.ownerOf(parseInt(gapeId));
          if (res.toLowerCase() !== account.toLowerCase()) {
            setGapeError(
              `You do not own this Galactic Ape. Try tokenID n-1 (e.g. Galactic Ape #1 => 0)`
            );
            setGapeMigrationLoading(false);
            return;
          }
        } catch (e) {
          setGapeError(
            `You do not own this Galactic Ape. Try tokenID n-1 (e.g. Galactic Ape #1 => 0)`
          );
          return;
        }

        setGapeError("");
        setMigrationTxHash("");
        setGapeMigrationLoading(true);
        setGapeMigrationSuccess(false);
        const tx = await MIGRATE_CONTRACT.migrateGalacticApe(parseInt(gapeId));
        setMigrationTxHash(tx.hash);
        await tx.wait();
        setMigratedGape(parseInt(gapeId) + 151 + 1);
        setGapeMigrationLoading(false);
        setGapeMigrationSuccess(true);
      } catch (e) {
        setGapeMigrationLoading(false);
        setGapeMigrationSuccess(false);
        console.error(e);
      }
    }
  };

  return (
    <section className="migration-section">
      <h2 className="migration-header">Prep your crew, migrate your Gapes!</h2>
      <button
        className="connect-wallet"
        disabled={connecting}
        onClick={() => {
          setConnecting(true);

          activate(injected, undefined, true)
            .then(() => setConnecting(false))
            .catch((error) => {
              // ignore the error if it's a user rejected request
              // eslint-disable-next-line no-undef
              if (error instanceof UserRejectedRequestError) {
                setConnecting(false);
              } else {
                setError(error);
              }
            });
        }}
      >
        {account
          ? ENSName || `${shortenHex(account, 4)}`
          : chainId !== 1
          ? "Change to Mainnet"
          : "Connect to Wallet"}
      </button>
      {error && <p>{error}</p>}
      <div className="container">
        <div className="box-container">
          <h4>Migrate Genesis Ape</h4>
          <p>Migrate your Genesis Ape by pasting your Genesis Ape unique ID.</p>
          <button
            className="approve-button"
            onClick={() => setApproveForAll("genesis")}
            disabled={genesisApprovalLoading}
          >
            {genesisApprovalLoading
              ? genesisApproval
                ? "Revoking Approval…"
                : "Approving Migration…"
              : genesisApproval
              ? "Revoke Approval"
              : "Approve Migration"}
          </button>
          <div className={`box-status${genesisApproval ? "" : " disabled"}`}>
            <input
              onChange={(e) => setGenesisApeId(e.target.value)}
              value={genesisApeId}
              placeholder="101081017895652826051875053334865626204918664514603414527482041280082611273729"
            />
            <button
              className="button"
              // disabled={
              //   genesisApeId.length !==
              //   "101081017895652826051875053334865626204918664514603414527482041280082611273729"
              //     .length
              // }
              onClick={() => migrateGenesis()}
            >
              {genesisMigrationLoading ? "Migrating..." : "Migrate"}
            </button>
          </div>
          {genesisError && <p className="error">{genesisError}</p>}
          {((genesisMigrationLoading && migrationGenesisTxHash) ||
            genesisMigrationSuccess) && (
            <p className="success-text">
              View your transaction on{" "}
              <a
                href={`${
                  etherscanMapping[chainId ? chainId : 1]
                }/tx/${migrationGenesisTxHash}`}
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </p>
          )}
          {genesisMigrationSuccess && migratedGenesis && (
            <p className="success-text">
              View your migrated ape on{" "}
              <a
                href={`${
                  openSeaMapping[chainId ? chainId : 1]
                }/assets/${MIGRATE_ADDRESS}/${migratedGenesis}`}
                target="_blank"
                rel="noreferrer"
              >
                OpenSea
              </a>
            </p>
          )}
        </div>
        <div className="box-container">
          <h4>Migrate Galactic Ape</h4>
          <p>Migrate your Galactic Ape by pasting tokenID (0 - 9997).</p>
          <button
            className="approve-button"
            onClick={() => setApproveForAll("gape")}
            disabled={gapeApprovalLoading}
          >
            {gapeApprovalLoading
              ? gapeApproval
                ? "Revoking Approval…"
                : "Approving Migration…"
              : gapeApproval
              ? "Revoke Approval"
              : "Approve Migration"}
          </button>
          <div className={`box-status${gapeApproval ? "" : " disabled"}`}>
            <input
              onChange={(e) => setGapeId(e.target.value)}
              value={gapeId}
              placeholder="0"
            />
            <button
              className="button"
              disabled={gapeId.length === 0 || gapeMigrationLoading}
              onClick={() => migrateGape()}
            >
              {gapeMigrationLoading ? "Migrating..." : "Migrate"}
            </button>
          </div>
          {gapeError && <p className="error">{gapeError}</p>}
          {((gapeMigrationLoading && migrationTxHash) ||
            gapeMigrationSuccess) && (
            <p className="success-text">
              View your transaction on{" "}
              <a
                href={`${
                  etherscanMapping[chainId ? chainId : 1]
                }/tx/${migrationTxHash}`}
                target="_blank"
                rel="noreferrer"
              >
                Etherscan
              </a>
            </p>
          )}
          {gapeMigrationSuccess && migratedGape && (
            <p className="success-text">
              View your migrated ape on{" "}
              <a
                href={`${
                  openSeaMapping[chainId ? chainId : 1]
                }/assets/${MIGRATE_ADDRESS}/${migratedGape}`}
                target="_blank"
                rel="noreferrer"
              >
                OpenSea
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
