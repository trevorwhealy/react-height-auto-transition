import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactHeightAutoTransition } from '../.';
import './styles.css'

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel. Vehicula ipsum a arcu cursus. Tempus egestas sed sed risus pretium. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.";


type Styles = {
  [key: string]: React.CSSProperties
}

const styles: Styles = {
  page: {

  },
  controls: {
    margin: '50px auto',
    height: 50,
    display: 'flex',
  },
  button: {
    flex: 1,
    margin: '0px 30px'
  },
  demo: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    borderRadius: 4,
    boxShadow: "rgba(0, 0, 0, .16) 0 0 16px",
    padding: 12
  }
};

export default function App() {
  const [numParagraphs, setNumParagraphs] = React.useState(0);

  const add = () => setNumParagraphs(numParagraphs + 1)
  const subtract = () => {
    if (numParagraphs > 0) setNumParagraphs(numParagraphs - 1);
  }

  const paragraphs = [...Array(numParagraphs)];

  return (
    <div style={styles.page}>
      <div style={styles.controls}>
        <button style={styles.button} onClick={add}>add</button>
        <button style={styles.button} onClick={subtract}>subtract</button>
      </div>
      <SampleContent color="#21A453">
        Above Content
        </SampleContent>
      <div style={styles.demo}>
        <ReactHeightAutoTransition>
          {paragraphs.map((_, idx) => (
            <div key={idx}>{LOREM_IPSUM}</div>
          ))}
        </ReactHeightAutoTransition>
      </div>
      <SampleContent color="#21A453">
        Below Content
        </SampleContent>
    </div>
  );
}

function SampleContent({ color, children }: { color: string, children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', backgroundColor: color, fontSize: 22, margin: '22px 0px', borderRadius: 4, lineHeight: '44px', textAlign: 'center'}}>
      {children}
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));
