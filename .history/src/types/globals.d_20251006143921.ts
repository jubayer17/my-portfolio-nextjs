declare module "*.css" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.sass" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.less" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.styl" {
    const content: Record<string, string>;
    export default content;
}

// For CSS modules
declare module "*.module.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.module.sass" {
    const classes: { readonly [key: string]: string };
    export default classes;
}