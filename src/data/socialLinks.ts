export interface SocialLink {
    href: string;
    icon: string;
    label: string;
    external?: boolean;
}

export const socialLinksData: SocialLink[] = [
    {
        href: "https://www.linkedin.com/in/jubayer-ahmed26/",
        icon: "fab fa-linkedin",
        label: "LinkedIn",
        external: true,
    },
    {
        href: "https://github.com/jubayer17",
        icon: "fab fa-github",
        label: "GitHub",
        external: true,
    },
    {
        href: "mailto:jubayer17@cse.pstu.ac.bd",
        icon: "fas fa-envelope",
        label: "Email",
        external: false,
    },
    {
        href: "https://codeforces.com/profile/GalvaaaTroN",
        icon: "fas fa-code",
        label: "Codeforces",
        external: true,
    },
    {
        href: "https://leetcode.com/jubayer17",
        icon: "fas fa-laptop-code",
        label: "LeetCode",
        external: true,
    },
];

export const footerSocialData: SocialLink[] = [
    {
        href: "https://www.linkedin.com/in/jubayer-ahmed26/",
        icon: "fab fa-linkedin-in",
        label: "LinkedIn",
        external: true,
    },
    {
        href: "https://github.com/jubayer17",
        icon: "fab fa-github",
        label: "GitHub",
        external: true,
    },
    {
        href: "mailto:jubayer17@cse.pstu.ac.bd",
        icon: "fas fa-envelope",
        label: "Email",
        external: false,
    },
    {
        href: "https://twitter.com/yourname",
        icon: "fab fa-twitter",
        label: "Twitter",
        external: true,
    },
];
