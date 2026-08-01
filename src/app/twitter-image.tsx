/**
 * Twitter reads its own file convention — without this the card falls back to
 * no image at all, since `opengraph-image` does not populate `twitter:image`.
 * Same artwork, so it re-exports rather than duplicating the layout.
 */
export { default, alt, size, contentType } from "./opengraph-image";
