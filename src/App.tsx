import { useState } from 'react';
import TypescriptApp from 'src/Typescript/TypescriptApp.tsx';
import Modal from 'src/Typescript/Modal.tsx';

function App() {
  const childrenElement = <h1>Typescript</h1>;
  const children = 'Children can be a string, number, or an array of these.';
  const style = { color: 'crimson' };
  const [showModal, setShowModal] = useState(false);

  return (
    <TypescriptApp childrenElement={childrenElement} style={style}>
      {children}
      {showModal && (
        <Modal>
          {/*Below is children of Modal Component*/}
          <div>
            {`This's a modal!`}
            <button style={{ background: 'papyawhip' }} onClick={() => setShowModal(false)}>
              close
            </button>
          </div>
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </TypescriptApp>
  );
}

export default App;
