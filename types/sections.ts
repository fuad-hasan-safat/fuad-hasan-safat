export type SectionKey = "home" | "about" | "resume" | "contact";

export type SectionRefs = Record<
  SectionKey,
  React.RefObject<HTMLElement | null>
>;