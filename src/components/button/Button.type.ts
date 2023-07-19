export interface ButtonStyles {
  color?: string;
  label?: string;
  bgcolor?: string;

  onClick?: (e: any) => any;
  type?: "button" | "submit" | "reset";
}
