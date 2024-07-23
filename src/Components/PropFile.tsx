interface PropCont {
  PostCard: any;
  Movie: string;
  Rating: number;
  Genra: string;
  RelaseDate: any;
}

const PropFile = ({ PostCard, Movie, Rating, Genra, RelaseDate }: PropCont) => {
  return (
    <div className="Main-content">
      <div>
        <img
          src={PostCard}
          alt="Error"
          style={{
            width: "100%",
            height: "30vh",
            objectPosition: "center",
            objectFit: "cover",
            borderRadius: "8px",
      
          }}
        />
      </div>
      <div className="Content">
        <h2>Movie Name: {Movie}</h2>
        <h2>Rating: {Rating}</h2>
        <h2>Genra: {Genra}</h2>
        <h2>Release Date: {RelaseDate}</h2>
      </div>
    </div>
  );
};

export default PropFile;
