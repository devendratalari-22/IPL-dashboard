import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-matches-header">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="logo-container">
          <div className="latest-match-details1">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="comp-logo"
          />
        </div>
        <hr className="hr-line" />
        <div className="latest-match-details2">
          <p className="label">first Innings</p>
          <p className="label-value">{firstInnings}</p>
          <p className="label">second Innings</p>
          <p className="label-value">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="label-value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="label-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
