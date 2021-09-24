import "./Introduction.css";

export default function Introduction() {
  return (
    <>
      <div className="introduction-wrapper">
        <div className="introduction-info">
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="list-intro-wrapper">
          <ol className="list-intro-info">
            <li>
              <div className="li-intro-item">
                <h4>Track company-wide progress</h4>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </li>
            <li>
              <div className="li-intro-item">
                <h4>Advanced built-in reports</h4>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </li>
            <li>
              <div className="li-intro-item">
                <h4>Everything you need in one place</h4>
                <p>
                  Stop jumping from one service to another to communicate, store
                  files, track tsks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
