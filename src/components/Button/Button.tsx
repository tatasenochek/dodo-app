import clsx from "clsx";
import styles from "./button.module.scss"
import { IButtonProps } from "./types";

export function Button({ children, className, onClick }: IButtonProps) {
	return (
		<button onClick={onClick} className={clsx(styles[className])}>
			{children}
		</button>
	);
}
