import {
  useTranslation,
} from "react-i18next";

function SecretBoot() {
  const { t } =
    useTranslation(
      "secretAccess",
    );

  const checks = [
    {
      label: t(
        "checks.identity",
      ),
      value: t(
        "checks.identityValue",
      ),
    },
    {
      label: t(
        "checks.node",
      ),
      value: t(
        "checks.nodeValue",
      ),
    },
    {
      label: t(
        "checks.encryption",
      ),
      value: t(
        "checks.encryptionValue",
      ),
    },
    {
      label: t(
        "checks.clearance",
      ),
      value: t(
        "checks.clearanceValue",
      ),
    },
  ];

  return (
    <div className="secret-os-boot">
      <div className="secret-os-boot__classification">
        //{" "}
        {t(
          "classification",
        )}
      </div>

      <h1
        className="glitch"
        data-text={t(
          "detected",
        )}
      >
        {t(
          "detected",
        )}
      </h1>

      <div className="secret-os-boot__terminal">
        <span>
          root@fsociety
        </span>

        <span>
          :
        </span>

        <span>
          ~$
        </span>

        <strong>
          ./connect_private_node
        </strong>

        <i />
      </div>

      <div className="secret-os-boot__checks">
        {checks.map(
          (
            check,
            index,
          ) => (
            <div
              key={
                check.label
              }
              className="secret-os-boot__check"
              style={{
                animationDelay:
                  `${
                    index *
                    0.18
                  }s`,
              }}
            >
              <span>
                {
                  check.label
                }
              </span>

              <div />

              <strong>
                {
                  check.value
                }
              </strong>
            </div>
          ),
        )}
      </div>

      <div className="secret-os-boot__progress">
        <div />
      </div>

      <span className="secret-os-boot__loading">
        PRIVATE_NODE //
        ESTABLISHING_CONNECTION
      </span>
    </div>
  );
}

export default SecretBoot;