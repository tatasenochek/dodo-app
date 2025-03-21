import clsx from "clsx";
import { IButtonProps } from "./types";

export function Button({ children, className, onClick }: IButtonProps) {
	return <button onClick={onClick} className={clsx(`button ${className}`)}>{children}</button>;
}
