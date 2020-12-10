import React,{ useState } from "react";
import  "./style1.css";

const bookDB = {

  javascript: [
                    { name: "Eloquent JavaScript", rating: "4/5" },
                    { name: "You Don't Know JS", rating: "3.5/5" }
                ],

  fiction: [
                { name: "The Alchemist",rating: "5/5" },
                { name: "Harry Potter and the Sorcerer's Stone",rating: "4.5/5" }
            ],

  business: [
                { name: "80 Law's Of Power",rating: "3.5/5" },
                { name: "The 80/20 Principlez",rating: "5/5" }
            ]

                };

export default function NeoG() {

  const [selectedGenre, setGenre] = useState("business");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (

    <div className="App">
      <h1 style={{color:" #0ba376",}}> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller",color:" #0ba376", }}>
        
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              color:" #0ba376",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{margin: "0 20%",}}/>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                color:" #0ba376",
                border: "1px solid #D1D5DB",
                width: "60%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
