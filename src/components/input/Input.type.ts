import { ChangeEvent } from "react";

export interface InputStyles {
  placeholder: string;
  name?: string;
  use?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
