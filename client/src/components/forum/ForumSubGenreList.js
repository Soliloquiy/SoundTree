import React from "react";
import "./ForumSubGenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function ForumSubGenreList(props) {

  if (!props.genre) {
    return []
  } else {
  return (
      <div>
      {props.genres.map((item) => {
        return (
          
          <div key={item.id} className="forum-sub-genre">
            
            <br></br>
            <div class="btn-group">
            <h1 class="info__title">Select the board</h1>
            <div class="btn-group-inner">
              
            { item.subgenres.map((subgenre) => <div>
              
              
              
                <button class="btn btn--list"
                key={subgenre.id}
                onClick={() => props.setSubGenre(subgenre.name)}
                >
                  <div class="btn__content">
                  </div>
                  {subgenre.name}

                  <span class="btn__label">r23</span>
                </button>
                
                
              
  

            


            
            </div>)}
            </div>
            </div>
            
          </div>
        );
      })}
      </div>
  )};
}