import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import seriesStats from "../../data/seriesStats";
import useScrollReveal from "../../hooks/useScrollReveal";

const POSTER_IMAGE =
  "/images/identity/elliot.png";

function getSeasonAverage(episodes) {
  const total = episodes.reduce(
    (sum, score) => sum + score,
    0,
  );

  return Number(
    (
      total /
      episodes.length
    ).toFixed(2),
  );
}

function getHighestEpisode(seasons) {
  let highest = {
    score: 0,
    season: "",
    episode: 0,
  };

  seasons.forEach((season) => {
    season.episodes.forEach(
      (score, index) => {
        if (score > highest.score) {
          highest = {
            score,
            season: season.id,
            episode: index + 1,
          };
        }
      },
    );
  });

  return highest;
}

function getBestSeason(seasons) {
  return seasons
    .map((season) => ({
      ...season,

      average:
        getSeasonAverage(
          season.episodes,
        ),
    }))
    .sort(
      (a, b) =>
        b.average -
        a.average,
    )[0];
}

function getNinePlusCount(seasons) {
  return seasons.reduce(
    (count, season) =>
      count +
      season.episodes.filter(
        (score) => score >= 9,
      ).length,
    0,
  );
}

function getScoreClass(score) {
  if (score >= 9.5) {
    return "episode-score--masterpiece";
  }

  if (score >= 9) {
    return "episode-score--excellent";
  }

  if (score >= 8.5) {
    return "episode-score--great";
  }

  if (score >= 8) {
    return "episode-score--good";
  }

  return "episode-score--mixed";
}

function RatingBadge({
  source,
  score,
  suffix,
  label,
  accent = "",
}) {
  return (
    <div
      className={`
        rating-badge
        ${accent}
      `}
    >
      <span className="rating-badge__source">
        {source}
      </span>

      <div className="rating-badge__score">
        <strong>
          {score}
        </strong>

        <span>
          {suffix}
        </span>
      </div>

      <p>
        {label}
      </p>
    </div>
  );
}

function CommunityPost({
  votes,
  tag,
  title,
  description,
  systemLabel,
  shareLabel,
  saveLabel,
}) {
  return (
    <article className="community-post">
      <div className="community-post__votes">
        <button
          type="button"
          aria-label="Up vote"
        >
          ▲
        </button>

        <strong>
          {votes}
        </strong>

        <button
          type="button"
          aria-label="Down vote"
        >
          ▼
        </button>
      </div>

      <div className="community-post__content">
        <div className="community-post__meta">
          <span>
            r/MrRobotVibe
          </span>

          <span>
            •
          </span>

          <strong>
            {tag}
          </strong>
        </div>

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        <div className="community-post__footer">
          <span>
            ◉ {systemLabel}
          </span>

          <span>
            {shareLabel}
          </span>

          <span>
            {saveLabel}
          </span>
        </div>
      </div>
    </article>
  );
}

function SeriesStatsSection() {
  const { t } =
    useTranslation(
      "seriesStats",
    );

  const {
    elementRef,
    isVisible,
  } = useScrollReveal();

  const seasonStats =
    useMemo(
      () =>
        seriesStats.seasons.map(
          (season) => ({
            ...season,

            average:
              getSeasonAverage(
                season.episodes,
              ),
          }),
        ),
      [],
    );

  const highestEpisode =
    useMemo(
      () =>
        getHighestEpisode(
          seriesStats.seasons,
        ),
      [],
    );

  const bestSeason =
    useMemo(
      () =>
        getBestSeason(
          seriesStats.seasons,
        ),
      [],
    );

  const ninePlusCount =
    useMemo(
      () =>
        getNinePlusCount(
          seriesStats.seasons,
        ),
      [],
    );

  return (
    <section
      id="ratings"
      ref={elementRef}
      className={`
        series-ratings
        ${
          isVisible
            ? "series-ratings--visible"
            : ""
        }
      `}
    >
      {/* ============================= */}
      {/* Background */}
      {/* ============================= */}

      <div className="series-ratings__grid" />

      <div className="series-ratings__red-glow" />

      <div className="series-ratings__ghost">
        MR.ROBOT
      </div>

      <div className="series-ratings__container">
        {/* ============================= */}
        {/* Header */}
        {/* ============================= */}

        <div className="series-ratings__section-header">
          <span>
            {t("number")}
          </span>

          <div />

          <span>
            {t(
              "publicIndex",
            )}
          </span>
        </div>

        {/* ============================= */}
        {/* IMDb Style Hero */}
        {/* ============================= */}

        <div className="series-title-block">
          <div>
            <span className="series-title-block__eyebrow">
              {t("type")}
              {" // "}
              {t("years")}
            </span>

            <h2>
              {t("title")}

              <span>
                {t(
                  "titleHighlight",
                )}
              </span>
            </h2>

            <p>
              {t(
                "description",
              )}
            </p>
          </div>

          <div className="series-title-block__status">
            <span>
              {t(
                "status.label",
              )}
            </span>

            <strong>
              ●{" "}
              {t(
                "status.completed",
              )}
            </strong>
          </div>
        </div>

        {/* ============================= */}
        {/* Ratings */}
        {/* ============================= */}

        <div className="rating-strip">
          <RatingBadge
            source={t(
              "ratings.imdb.source",
            )}
            score={
              seriesStats
                .ratings
                .imdb
                .score
            }
            suffix="/10"
            label={t(
              "ratings.imdb.label",
            )}
            accent="rating-badge--imdb"
          />

          <RatingBadge
            source={t(
              "ratings.rottenTomatoes.source",
            )}
            score={
              seriesStats
                .ratings
                .rottenTomatoes
                .critics
            }
            suffix="%"
            label={t(
              "ratings.rottenTomatoes.label",
            )}
            accent="rating-badge--rt"
          />

          <RatingBadge
            source={t(
              "ratings.audience.source",
            )}
            score={
              seriesStats
                .ratings
                .rottenTomatoes
                .audience
            }
            suffix="%"
            label={t(
              "ratings.audience.label",
            )}
          />

          <RatingBadge
            source={t(
              "ratings.metacritic.source",
            )}
            score={
              seriesStats
                .ratings
                .metacritic
                .critics
            }
            suffix="/100"
            label={t(
              "ratings.metacritic.label",
            )}
            accent="rating-badge--meta"
          />

          <RatingBadge
            source={t(
              "ratings.metaUsers.source",
            )}
            score={
              seriesStats
                .ratings
                .metacritic
                .users
            }
            suffix="/10"
            label={t(
              "ratings.metaUsers.label",
            )}
          />
        </div>

        {/* ============================= */}
        {/* Main Content */}
        {/* ============================= */}

        <div className="series-main-layout">
          {/* ============================= */}
          {/* Sidebar */}
          {/* ============================= */}

          <aside className="series-sidebar">
            <div className="series-poster">
              <img
                src={
                  POSTER_IMAGE
                }
                alt="Mr. Robot"
              />

              <div className="series-poster__overlay" />

              <div className="series-poster__top">
                <span>
                  MRR_2015
                </span>

                <span>
                  REC ●
                </span>
              </div>

              <div className="series-poster__bottom">
                <strong>
                  MR. ROBOT
                </strong>

                <span>
                  fsociety
                </span>
              </div>
            </div>

            {/* Series info */}

            <div className="series-facts">
              <h3>
                {t(
                  "seriesInfo.title",
                )}
              </h3>

              <div>
                <span>
                  {t(
                    "seriesInfo.seasons",
                  )}
                </span>

                <strong>
                  {
                    seriesStats.seasonsCount
                  }
                </strong>
              </div>

              <div>
                <span>
                  {t(
                    "seriesInfo.episodes",
                  )}
                </span>

                <strong>
                  {
                    seriesStats.episodesCount
                  }
                </strong>
              </div>

              <div>
                <span>
                  {t(
                    "seriesInfo.years",
                  )}
                </span>

                <strong>
                  {
                    seriesStats.years
                  }
                </strong>
              </div>

              <div>
                <span>
                  {t(
                    "seriesInfo.ninePlusEpisodes",
                  )}
                </span>

                <strong>
                  {
                    ninePlusCount
                  }
                </strong>
              </div>
            </div>
          </aside>

          {/* ============================= */}
          {/* Feed */}
          {/* ============================= */}

          <main className="series-feed">
            {/* Season ratings */}

            <div className="season-ratings-card">
              <div className="panel-heading">
                <div>
                  <span>
                    ★
                  </span>

                  <div>
                    <strong>
                      {t(
                        "seasonRatings.title",
                      )}
                    </strong>

                    <small>
                      {t(
                        "seasonRatings.subtitle",
                      )}
                    </small>
                  </div>
                </div>

                <span>
                  {t(
                    "seasonRatings.count",
                    {
                      count:
                        seriesStats.seasonsCount,
                    },
                  )}
                </span>
              </div>

              <div className="season-rating-list">
                {seasonStats.map(
                  (season) => (
                    <div
                      key={
                        season.id
                      }
                      className="season-rating-row"
                    >
                      <div className="season-rating-row__name">
                        <strong>
                          {
                            season.id
                          }
                        </strong>

                        <span>
                          {
                            season.year
                          }
                        </span>
                      </div>

                      <div className="season-rating-row__bar">
                        <div
                          style={{
                            width: `${
                              season.average *
                              10
                            }%`,
                          }}
                        />
                      </div>

                      <strong className="season-rating-row__score">
                        {
                          season.average
                        }
                      </strong>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* ============================= */}
            {/* Community */}
            {/* ============================= */}

            <div className="community-section">
              <div className="community-section__heading">
                <span>
                  {t(
                    "community.title",
                  )}
                </span>

                <small>
                  {t(
                    "community.name",
                  )}
                </small>
              </div>

              <CommunityPost
                votes="9.9K"
                tag={`${highestEpisode.season}E${highestEpisode.episode}`}
                title={t(
                  "community.post1.title",
                )}
                description={t(
                  "community.post1.description",
                  {
                    season:
                      highestEpisode.season,

                    episode:
                      highestEpisode.episode,

                    score:
                      highestEpisode.score,
                  },
                )}
                systemLabel={t(
                  "community.systemAnalysis",
                )}
                shareLabel={t(
                  "community.share",
                )}
                saveLabel={t(
                  "community.save",
                )}
              />

              <CommunityPost
                votes={
                  bestSeason.average
                }
                tag={
                  bestSeason.id
                }
                title={t(
                  "community.post2.title",
                  {
                    season:
                      bestSeason.id,
                  },
                )}
                description={t(
                  "community.post2.description",
                  {
                    episodes:
                      bestSeason.episodesCount,

                    average:
                      bestSeason.average,
                  },
                )}
                systemLabel={t(
                  "community.systemAnalysis",
                )}
                shareLabel={t(
                  "community.share",
                )}
                saveLabel={t(
                  "community.save",
                )}
              />

              <CommunityPost
                votes={
                  ninePlusCount
                }
                tag="9.0+"
                title={t(
                  "community.post3.title",
                  {
                    count:
                      ninePlusCount,
                  },
                )}
                description={t(
                  "community.post3.description",
                )}
                systemLabel={t(
                  "community.systemAnalysis",
                )}
                shareLabel={t(
                  "community.share",
                )}
                saveLabel={t(
                  "community.save",
                )}
              />
            </div>
          </main>
        </div>

        {/* ============================= */}
        {/* Episode Browser */}
        {/* ============================= */}

        <section className="episode-browser">
          <div className="episode-browser__header">
            <div>
              <span>
                {t(
                  "episodeBrowser.label",
                )}
              </span>

              <h3>
                {t(
                  "episodeBrowser.title",
                )}
              </h3>
            </div>

            <span>
              {t(
                "episodeBrowser.episodes",
                {
                  count:
                    seriesStats.episodesCount,
                },
              )}
            </span>
          </div>

          <div className="episode-season-grid">
            {seasonStats.map(
              (season) => (
                <div
                  key={
                    season.id
                  }
                  className="episode-season"
                >
                  <div className="episode-season__header">
                    <div>
                      <strong>
                        {
                          season.id
                        }
                      </strong>

                      <span>
                        {
                          season.year
                        }
                      </span>
                    </div>

                    <div>
                      {t(
                        "episodeBrowser.average",
                      )}
                      {" "}

                      <strong>
                        {
                          season.average
                        }
                      </strong>
                    </div>
                  </div>

                  <div className="episode-season__episodes">
                    {season.episodes.map(
                      (
                        score,
                        index,
                      ) => (
                        <div
                          key={
                            index
                          }
                          className={`
                            episode-score
                            ${getScoreClass(
                              score,
                            )}
                          `}
                        >
                          <span>
                            E
                            {String(
                              index +
                                1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </span>

                          <strong>
                            {
                              score
                            }
                          </strong>

                          <small>
                            ★
                          </small>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        {/* ============================= */}
        {/* Footer */}
        {/* ============================= */}

        <div className="series-ratings__footer">
          <span>
            {t(
              "footer.database",
            )}
          </span>

          <span>
            {t(
              "footer.source",
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

export default SeriesStatsSection;