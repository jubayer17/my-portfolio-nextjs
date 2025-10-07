export interface ContactInfo {
    icon: string;
    label: string;
    value: string;
    href?: string;
    isLink?: boolean;
}

export const contactData: ContactInfo[] = [
    {
        icon: "fas fa-envelope",
        label: "Email",
        value: "jubayer17@cse.pstu.ac.bd",
        href: "mailto:jubayer17@cse.pstu.ac.bd",
        isLink: true,
    },
    {
        icon: "fas fa-map-marker-alt",
        label: "Location",
        value: "Patuakhali, Barishal",
        isLink: false,
    },
    {
        icon: "fas fa-phone",
        label: "Phone",
        value: "+880-1785-720-927",
        href: "tel:+8801785720927",
        isLink: true,
    },
];

export const contactContent = {
    title: "Let's work together",
    description:
        "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out! 💬",
};
