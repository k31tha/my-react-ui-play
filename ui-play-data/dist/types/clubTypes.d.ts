export declare type ClubSocialLink = {
    SocialType: string | null;
    SocialLink: string | null;
};
export declare type ClubDetail = {
    ClubID: number;
    ClubName?: string | null;
    ClubAddress?: string | null;
    ContactEmailAddr?: string | null;
    ClubLogo?: string | null;
    MainWebsite?: string | null;
    UrlFriendlyName?: string | null;
    PyramidId?: string | null;
    PyramidName?: string | null;
    Nicknames?: string | null;
    Active: boolean | null;
    ClubGuid?: string | null;
    SocialLinks?: Array<ClubSocialLink>;
};
