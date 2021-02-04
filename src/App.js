import './App.css';
import { useEffect, useState } from 'react';
import JsonFileSelector from './JsonFIleSelector'
import CodeGraph from './CodeGraph';

function App() {
  const [file, setFile] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        setData(JSON.parse(reader.result));
      }
      reader.readAsText(file);
    }
  }, [file])

  return (
    <div className="App">
      <JsonFileSelector onFileSelected={setFile} />
      <br/>
      <CodeGraph data={data}/>
    </div>
  );
}

export default App;
