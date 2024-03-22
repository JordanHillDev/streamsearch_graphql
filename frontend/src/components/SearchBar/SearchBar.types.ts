import { SetStateAction } from "react";

export type SearchBarProps = {
  onChange: React.Dispatch<SetStateAction<string>>;
};
