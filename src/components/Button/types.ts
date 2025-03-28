import { ReactNode } from "react";

export interface IButtonProps {
	children: ReactNode;
	className: string;
	onClick?: () => void;
}
