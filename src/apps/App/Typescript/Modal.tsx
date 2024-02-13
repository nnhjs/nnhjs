import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
	children: ReactNode;
};

function Modal({ children }: ModalProps) {
	const elRef = useRef<HTMLDivElement | null>(null);
	if (!elRef.current) {
		elRef.current = document.createElement("div")
		elRef.current.classList.add("modal");
	}
	useEffect(() => {
		const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		modalRoot.appendChild(elRef.current!);
		return () => {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			modalRoot.removeChild(elRef.current!);
		};
	}, []);

	return createPortal(children, elRef.current);
}

export default Modal;
