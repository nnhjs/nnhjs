import { Heading, Separator, Text } from '@radix-ui/themes';
import { Fragment, useState } from 'react';
import TypescriptApp from 'src/Typescript/TypescriptApp.tsx';
import Modal from 'src/Typescript/Modal.tsx';
import { ReactComponent as Vite } from 'src/assets/vite.svg';

function App() {
  const childrenElement = <Heading>Typescript</Heading>;
  const children = 'Children can be a string, number, or an array of these.';
  const style = { color: 'crimson' };
  const [showModal, setShowModal] = useState(false);

  window.devicePixelRatio;

  return (
    <Fragment>
      <Heading>Hello, world!</Heading>
      <Text>Good code, good english</Text>

      <Separator orientation="horizontal" size="4" color="crimson" />

      <TypescriptApp childrenElement={childrenElement} style={style}>
        {children}
      </TypescriptApp>

      <div id="modal-root"></div>
      {showModal && (
        <Modal>
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              height: '100vh',
              width: '100vh',
              background: 'rgba(0,0,0,0.1)',
              zIndex: 99,
            }}
          >
            {`I'm a modal!`}
            <button style={{ background: 'papyawhip' }} onClick={() => setShowModal(false)}>
              close
            </button>
          </div>
          <Vite />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </Fragment>
  );
}

export default App;
