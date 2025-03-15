import { ITitle } from "./types";

export function Title({children}: ITitle) {
  return <h2 className="content__title">{children}</h2>;
}