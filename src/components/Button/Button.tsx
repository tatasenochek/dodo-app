import clsx from "clsx";
import { IButtonProps } from "./types";

export function Button({ children, className }: IButtonProps) {
	return <button className={clsx(`button ${className}`)}>{children}</button>;
}
