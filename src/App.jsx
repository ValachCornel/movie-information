import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import InfoForm from "./components/InfoForm";

const App = () => {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState(false);
  const [info, setInfo] = useState([]);
  const handleClick = () => {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=f242b9b7`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          setResult(true);
          setInfo(data);
        }
      });
  };

  return (
    <div className="main">
      <SearchForm handleClick={handleClick} title={title} setTitle={setTitle} />
      {result ? <InfoForm data={info} /> : ""}
    </div>
  );
};

export default App;
