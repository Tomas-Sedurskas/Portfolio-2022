export interface ButtonProps {
  label: string;
  linkType: "external" | "internal";
  url: string;
  reverse?: boolean;
}
