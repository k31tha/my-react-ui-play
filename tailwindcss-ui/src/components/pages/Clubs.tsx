import * as React from "react";
import { Link } from "react-router-dom";
import { exampleClubListData } from "@nlsplay/ui-play-data";

export default function Clubs() {
  return (
    <>
      <h2 className="uppercase mb-4 text-xl font-bold">Clubs</h2>
      <p className="mb-4">No of clubs is {exampleClubListData.length}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {exampleClubListData
          .sort((a, b) => (a.ClubName! >= b.ClubName! ? 1 : -1))
          .map((club) => (
            <li className="p-4" key={club.UrlFriendlyName}>
              <Link
                to={"/club/" + club.UrlFriendlyName}
                className="no-underline hover:underline"
              >
                {club.ClubName!}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
