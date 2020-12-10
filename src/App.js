import React,{useState} from "react";
import "./styles.css";
const movieDB = {
          Hollywood:[
                            { name: "Intersteller", rating: "4/5" },
                            { name: "Inception", rating: "3.5/5" }
                    ],
          Bollywood:[
                            { name: "Kal Ho Na Ho", rating: "4.5/5" },
                            { name: "Un-named", rating: "4/5" }
                    ],
          // Pollywood :[
          //                 { name: "Ashqke", rating: "4/5" },
          //                 { name: "Love Punjab", rating: "3.5/5" }
          //           ],
        };



export default function App() {

           const [onClick, setOnClick] = useState("Hollywood")

      function onClickHandler(genre){
          
              //  console.log(movieDB[genre]);
                // var moviesList = movieDB[genre]
                
           

                // var element = movieDB[genre].map((movie) => 
                //                     { return <li
                //                                 key={movie.name}
                //                                 className="movies-list">
                //                                     <span className="movies-list-text">
                //                                     {" "}
                //                                     <div style={{ fontSize: "larger" }}> {movie.name} </div>
                //                                     <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
                                                    
                //                                     </span>               
                //                           </li>
                //              })

                setOnClick(genre)
                
                  
                  
                }
                








  return (
          <React.Fragment>
              <div className="heading-div">
                <h1 className="heading-text"> 🎞🎞 Best Movies</h1>
              </div>

              <ul className="btn-section">
                      {Object.keys(movieDB).map((genre) =>
                          {return <li 
                                      key={genre} 
                                      className="btn-list-section"
                                      onClick= { () => onClickHandler(genre)}
                                      >
                                        <span className="section-titles-name download-btn skill-btn "> 
                                          {genre}
                                        </span>
                                  </li>
                                    })        
                      }
              </ul>

              <hr className="breaking-line" />

              <div  className="heading-div">
                  <ul className="">
                        { movieDB[onClick].map((movie) => {
                           return <li
                         key={movie.name}
                        className="movies-list">
                            <span className="movies-list-text">
                            {" "}
                            <div style={{ fontSize: "larger" }}> {movie.name} </div>
                            <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
                            
                            </span>               
                                          </li>
                             })}
                  </ul>
              </div>



      
          </React.Fragment>
  );
}
