import React, { useState } from "react";
import Demo from "src/apps/App/Typescript/Demo.tsx";
import Modal from "src/apps/App/Typescript/Modal.tsx";

function App() {
	const childrenElement = (
		<h1 className="text-center text-lg font-bold text-pink-600">
			This is a heading element
		</h1>
	);
	const string =
		"ReactNode: string | number | boolean | null | undefined | ReactElement | ReactFragment | ReactPortal";
	const style = { textAlign: "center" } as const;
	const [showModal, setShowModal] = useState(false);

	return (
		<React.Fragment>
			<Demo childrenElement={childrenElement} style={style}>
				{string}
				{showModal && (
					<Modal>
						{/*Below is children of Modal Component*/}
						<div className="modal-container">
							This is a modal component
							<button onClick={() => setShowModal(false)} type="button">
								close
							</button>
						</div>
					</Modal>
				)}
			</Demo>

			<section>
				<details open={true}>
					<summary>Explain how do modal active</summary>
					<p>
						When you click on the button, setShowModal will be called and the
						state will be changed. Then, the Modal component will be rendered.
						The Modal component will create a div element and append it to the
						modal-root using the React Portal. React Portal will render the
						children of Modal component inside a div wrapper. And the div
						wrapper will be appended to the modal-root. When you click on the X
						button, setShowModal will be called again and the state will be set
						to false. Then, the Modal component will be removed from the
						modal-root.
					</p>
				</details>
				<button onClick={() => setShowModal(true)} type="button">
					<span>{ showModal ? 'Close Modal' : 'Open Modal' }</span>
				</button>
			</section>
		</React.Fragment>
	);
}

export default App;
