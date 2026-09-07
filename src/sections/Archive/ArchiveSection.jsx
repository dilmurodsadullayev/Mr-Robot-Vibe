import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import EvidenceCard from "../../components/EvidenceCard/EvidenceCard";
import EvidenceModal from "../../components/EvidenceModal/EvidenceModal";

import evidence from "../../data/evidence";

import useScrollReveal from "../../hooks/useScrollReveal";

function ArchiveSection() {
  const { t } =
    useTranslation("archive");

  const [
    selectedEvidence,
    setSelectedEvidence,
  ] = useState(null);

  const {
    elementRef,
    isVisible,
  } = useScrollReveal();

  const openEvidence = useCallback(
    (file) => {
      setSelectedEvidence(file);
    },
    [],
  );

  const closeEvidence =
    useCallback(() => {
      setSelectedEvidence(null);
    }, []);

  return (
    <>
      <section
        id="archive"
        ref={elementRef}
        className={`
          archive-section
          ${
            isVisible
              ? "archive-section--visible"
              : ""
          }
        `}
      >
        <div className="archive-section__grid" />

        <div className="archive-section__glow" />

        <div className="archive-section__ghost">
          ARCHIVE
        </div>

        <div className="archive-section__container">
          {/* Header */}

          <div className="archive-section__header">
            <span>
              {t("number")}
            </span>

            <div />

            <span>
              FSOCIETY_DATABASE
            </span>
          </div>

          {/* Heading */}

          <div className="archive-section__intro">
            <div className="archive-section__label">
              <span />

              {t("label")}
            </div>

            <h2 className="archive-section__title">
              <span>
                {t("title")}
              </span>

              <span
                className="glitch archive-section__highlight"
                data-text={t(
                  "titleHighlight",
                )}
              >
                {t(
                  "titleHighlight",
                )}
              </span>
            </h2>

            <p className="archive-section__description">
              {t("description")}
            </p>
          </div>

          {/* Gallery */}

          <div className="archive-grid">
            {evidence.map(
              (file, index) => (
                <EvidenceCard
                  key={file.id}
                  evidence={file}
                  index={index}
                  onOpen={
                    openEvidence
                  }
                />
              ),
            )}
          </div>
        </div>
      </section>

      <EvidenceModal
        evidence={
          selectedEvidence
        }
        onClose={closeEvidence}
      />
    </>
  );
}

export default ArchiveSection;