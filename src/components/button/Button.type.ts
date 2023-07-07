export interface ButtonProps {
  primary?: boolean;
  bgcolor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export interface getButtonStyles {
  primary?: boolean;
  bgcolor?: string;
  size?: "small" | "medium" | "large";
}