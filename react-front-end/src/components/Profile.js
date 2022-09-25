/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import Run from "./Run";
import { dataContext } from "../providers/DataProvider";

export default function Profile() {
  const { user, runnerRuns } = useContext(dataContext);

  const showRunnersRuns = (runs) => {
    const runsArray = Object.values(runs);
    return runsArray.map((run) => (
      <Run key={run.id} run={run} userFlag={true} />
    ));
  };

  const profilePicture = (
    <img
      className="profile-pic"
      src="https://cdn-icons-png.flaticon.com/512/2335/2335153.png"
      alt="icon-profile"
    ></img>
  );

  return (
    <main className="profile-section">
      <section className="profile-header">
        {profilePicture}
        {user && (
          <>
            <h1>Welcome {user.name}</h1>
            <ul>
              <li>Age: {user.age}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.phone}</li>
            </ul>
          </>
        )}
      </section>

      <section className="profile-stats">
        <h1>Runs</h1>
        {showRunnersRuns(runnerRuns)}
      </section>
    </main>
  );
}
