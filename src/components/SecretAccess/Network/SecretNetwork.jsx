import {
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

import secretNodes from "../../../data/secret/secretNodes";

function SecretNetwork({
  completeAction,
}) {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const [
    scanning,
    setScanning,
  ] = useState(false);

  const [
    scanned,
    setScanned,
  ] = useState(false);

  const [
    selectedNode,
    setSelectedNode,
  ] = useState(
    secretNodes[0],
  );

  const handleScan =
    () => {
      if (
        scanning ||
        scanned
      ) {
        return;
      }

      setScanning(true);

      window.setTimeout(
        () => {
          setScanning(false);
          setScanned(true);

          completeAction(
            "network_scan",
            10,
          );
        },
        1800,
      );
    };

  return (
    <div className="secret-network">
      <div className="secret-network__header">
        <div>
          <span className="secret-module-kicker">
            // NETWORK_MAP
          </span>

          <h2>
            {t(
              "os.network.title",
            )}
          </h2>

          <p>
            {t(
              "os.network.description",
            )}
          </p>
        </div>

        <button
          type="button"
          className="secret-os-action"
          onClick={
            handleScan
          }
          disabled={
            scanning
          }
        >
          {scanning
            ? "SCANNING..."
            : scanned
              ? "SCAN_COMPLETE"
              : t(
                  "os.network.scan",
                )}

          {!scanned &&
            !scanning && (
              <strong>
                +10 ACCESS
              </strong>
            )}
        </button>
      </div>

      {scanning && (
        <div className="secret-network__scanner">
          <span>
            SEARCHING PRIVATE
            NETWORK...
          </span>

          <div>
            <i />
          </div>
        </div>
      )}

      <div className="secret-network__layout">
        <div className="secret-network__nodes">
          {secretNodes.map(
            (node) => (
              <button
                type="button"
                key={
                  node.id
                }
                className={`
                  secret-node
                  secret-node--${node.status}
                  ${
                    selectedNode.id ===
                    node.id
                      ? "secret-node--active"
                      : ""
                  }
                `}
                onClick={() =>
                  setSelectedNode(
                    node,
                  )
                }
              >
                <div>
                  <i />

                  <strong>
                    {
                      node.name
                    }
                  </strong>
                </div>

                <span>
                  {
                    node.signal ===
                    null
                      ? "???"
                      : `${node.signal}%`
                  }
                </span>
              </button>
            ),
          )}
        </div>

        <div className="secret-network__detail">
          <span>
            NODE_INFORMATION
          </span>

          <h3>
            {
              selectedNode.name
            }
          </h3>

          <div>
            <span>
              STATUS
            </span>

            <strong>
              {
                selectedNode.status
              }
            </strong>
          </div>

          <div>
            <span>
              ADDRESS
            </span>

            <strong>
              {
                selectedNode.ip
              }
            </strong>
          </div>

          <div>
            <span>
              SIGNAL
            </span>

            <strong>
              {
                selectedNode.signal ===
                null
                ? "ENCRYPTED"
                : `${selectedNode.signal}%`
              }
            </strong>
          </div>

          <div>
            <span>
              ACCESS
            </span>

            <strong>
              {
                selectedNode.access
              }
            </strong>
          </div>
        </div>
      </div>

      {scanned && (
        <div className="secret-network__warning">
          <span>
            !
          </span>

          <div>
            <strong>
              UNKNOWN SIGNAL
              DETECTED
            </strong>

            <p>
              NODE 0x7F //
              ENCRYPTED //
              MANUAL DECRYPTION
              REQUIRED
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecretNetwork;