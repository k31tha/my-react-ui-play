import * as React from "react";
import { exampleClubListData } from "@nlsplay/ui-play-data";
import {
  ClubDetail,
  ClubSocialLink,
} from "@nlsplay/ui-play-data/dist/types/clubTypes";
import { createSourceMapSource } from "typescript";

export type Props = {
  clubUrl: string;
};

export type ClubProps = {
  club: ClubDetail;
};

export type ClubSocialProps = {
  socialLinks: Array<ClubSocialLink>;
};

export type SocialProps = {
  url: string;
  iconUrl: string;
};

function ClubLogo(props: ClubProps): JSX.Element {
  return (
    <div className="h-40 w-40 m-auto sm:m-0">
      <img
        src={
          "//nonleaguesocial.co.uk/assets/images/club/logo/" +
          props.club.ClubLogo
        }
        className="max-w-full max-h-full mx-auto"
        alt={props.club.ClubName + " logo"}
      />
    </div>
  );
}

function socialLink(socialType: string): SocialProps {
  let socialUrl = "";
  let socialIcon = "";
  if (socialType === "twitter") {
    socialUrl = "https://twitter.com/";
    socialIcon =
      "//nonleaguesocial.co.uk/assets/site/Images/GoSocial/twitter.png";
  } else if (socialType === "facebook") {
    socialUrl = "https://facebook.com/";
    socialIcon =
      "//nonleaguesocial.co.uk/assets/site/Images/GoSocial/facebook.png";
  } else if (socialType === "instagram") {
    socialUrl = "https://instagram.com/";
    socialIcon =
      "//nonleaguesocial.co.uk/assets/site/Images/GoSocial/instagram.png";
  } else if (socialType === "wikipedia") {
    socialUrl = "https://en.wikipedia.org/wiki/";
    socialIcon =
      "//nonleaguesocial.co.uk/assets/site/Images/GoSocial/wikipedia.png";
  }
  return { url: socialUrl, iconUrl: socialIcon };
}

function SocialLink(props: ClubSocialLink): JSX.Element {
  let link = socialLink(props.SocialType!.toLowerCase());

  return (
    <a href={link.url + props.SocialLink}>
      <img alt={props.SocialType!.toLowerCase()} src={link.iconUrl} />
    </a>
  );
}

function ClubSocialLinks(props: ClubSocialProps): JSX.Element {
  return (
    <>
      {props.socialLinks.map((item) => (
        <li className="p-4">
          <SocialLink
            SocialType={item.SocialType}
            SocialLink={item.SocialLink}
          />
        </li>
      ))}
    </>
  );
}

export const Club = ({ clubUrl }: Props): JSX.Element => {
  let club = exampleClubListData.find(
    (u) => u.UrlFriendlyName?.toLowerCase() === clubUrl
  );
  if (club === undefined || club === null)
    return <p>club not found {clubUrl}</p>;
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 mt-4">
        <div className="row-start-1 col-start-1 col-span-1 sm:col-start-2 pb-4">
          <ClubLogo club={club} />
        </div>
        <section className="col-start-1 col-span-1 flex flex-col">
          <h2 className="uppercase mb-1 text-xl font-bold">{club?.ClubName}</h2>
          <p className="uppercase sm:ml-4 mb-4 text-base font-bold">
            {club?.PyramidName}
          </p>
          <p className="uppercase mb-1 font-bold text-xs">
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            {club?.ClubAddress} †
          </p>
          <ul className="flex flex-row flex-wrap justify-start max-w-xs align-bottom">
            <li className="p-4">
              <a href={club.MainWebsite!} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </li>
            <ClubSocialLinks socialLinks={club.SocialLinks!} />
          </ul>
          <p className="mb-4 text-xs">
            † nonleaguesocial.co.uk does not guarantee or warrant the accuracy
            or reliability of any information
          </p>
        </section>
      </section>
    </>
  );
};
