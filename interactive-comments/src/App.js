import React, { useContext } from "react";
import "./App.css";
import Comment from "./components/Comment";
import MyCommentBox from "./components/MyCommentBox";
import { DataContext } from "./DataContext";

function App() {
  const { data, setData } = useContext(DataContext);
  console.log(data);

  return (
    <div className="App">
      {data ? (
        data.map((comment, index) => <Comment key={index} {...comment} />)
      ) : (
        <h1>No Data</h1>
      )}
      <MyCommentBox id={0} />
    </div>
  );
}

export default App;
