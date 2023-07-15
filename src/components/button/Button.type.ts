export interface ButtonStyles {
  color?: string;

  label?: string;
  // use?: "basic" | "error" | "warn" | "disable" | "secondary";
  use?: string;
  bgcolor?: string;
  width?: string;

  onClick?: (e: any) => any;
  type?: "button" | "submit" | "reset";
}
