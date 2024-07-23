import "./App.css";
import PropFile from "./Components/PropFile";
import TroggleFile from "./Components/TroggleFile";

function App() {
  return (
    < >
     <h1 style={{
      textAlign:"center",
      fontSize: "4rem",
      marginBottom:"2rem",
     }}>Movie Review</h1>

      <div
        style={{
          display: "flex",
          gap: "3rem",
        }}
      > 
        
        <PropFile
          PostCard="img.jpg"
          Movie="The Revolution"
          Rating={9.3}
          Genra="Crime, Drama"
          RelaseDate="1994-09-10"
        />

        <PropFile
          PostCard="im2.jpg"
          Movie="The Beast"
          Rating={8.5}
          Genra="Adventure, Drama"
          RelaseDate="2015-09-07"
        />
        <PropFile
          PostCard="im3.jpg"
          Movie="Dune"
          Rating={9.6}
          Genra="Crime, Drama"
          RelaseDate="2019-09-10"
        />
      </div>
      <TroggleFile />
    </>
  );
}

export default App;
