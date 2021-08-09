import React from "react";
import FollowButton from "../FollowButton"
import "./SubGenreList.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });


let topRow;
let middleRow;
let middleRow2;
let middleRow3;
let bottomRow;


export default function SubGenreList(props) {

  if (!props.genre) {
    return []
  } else {
  return (
    <section className="sub-genres">
      {props.genres.map((genres) => {
        {topRow = genres.subgenres.slice(0,1)}
        {middleRow = genres.subgenres.slice(1,3)}
        {middleRow2 = genres.subgenres.slice(3,5)}
        {middleRow3 = genres.subgenres.slice(5,7)}
        {bottomRow = genres.subgenres.slice(7)}
        {console.log(bottomRow)}
        return (
          <div >
            
            <section className="top-spacing">
              
            {topRow.map((subgenre) => {
              
              return(
                <section className="top">
                  <section
                    key={subgenre.id}
                    onClick={() => props.setSubGenre(subgenre.name)}
                  >
                    <button class="cybr-btn">
                    {subgenre.name}
                      <span aria-hidden class="cybr-btn__glitch">{subgenre.name}_</span>
                      <span aria-hidden class="cybr-btn__tag">R25</span>
                    </button>
                    
                  </section>

                  <section className="follow-section">

                    {(props.userId && !props.userSubgenreIds.includes(subgenre.id)) ? (
                      <div className="follow-button-container">
                        <FollowButton userId={props.userId} subgenre_id={subgenre.id} follow={props.follow} setFollow={props.setFollow}/>
                      </div>
    
                    ) : (
                      <div className="follow-button-container"> </div>
                    )}
                    
                  </section>

                </section>  
                  
              )
            })}
            </section>
            <section className="middle-spacing">
            {middleRow.map((subgenre) => {

              return(
                <section className="middle">
                <section
                  key={subgenre.id}
                  onClick={() => props.setSubGenre(subgenre.name)}
                >
                  <button class="cybr-btn">
                    {subgenre.name}
                      <span aria-hidden class="cybr-btn__glitch">{subgenre.name}_</span>
                      <span aria-hidden class="cybr-btn__tag">R25</span>
                    </button>
                
              </section>
   
                {(props.userId && !props.userSubgenreIds.includes(subgenre.id)) ? (
                
                  <div className="follow-button-container">
                    <FollowButton userId={props.userId} subgenre_id={subgenre.id} follow={props.follow} setFollow={props.setFollow}/>
                  </div>

                ) : (
                  <div className="follow-button-container"> </div>
                )}
              </section>
              )
            })}
            
            </section>
            <section className="middle-spacing-2">
            {middleRow2.map((subgenre) => {
              return(
                <section className="middle">
                <section
                  key={subgenre.id}
                  onClick={() => props.setSubGenre(subgenre.name)}
                  className="middle"
                >
                  <button class="cybr-btn">
                    {subgenre.name}
                      <span aria-hidden class="cybr-btn__glitch">{subgenre.name}_</span>
                      <span aria-hidden class="cybr-btn__tag">R25</span>
                    </button>
                
              </section>

              {(props.userId && !props.userSubgenreIds.includes(subgenre.id)) ? (

                <div className="follow-button-container">
                  <FollowButton userId={props.userId} subgenre_id={subgenre.id} follow={props.follow} setFollow={props.setFollow}/>
                </div>

              ) : (
                <div className="follow-button-container"> </div>
              )}
              </section>
              
              )
            })}
            </section>
            <section className="middle-spacing-3">
            {middleRow3.map((subgenre) => {
              return(
                <section className="middle">
                <section
                  key={subgenre.id}
                  onClick={() => props.setSubGenre(subgenre.name)}
                  className="middle"
                >
                  <button class="cybr-btn">
                    {subgenre.name}
                      <span aria-hidden class="cybr-btn__glitch">{subgenre.name}_</span>
                      <span aria-hidden class="cybr-btn__tag">R25</span>
                    </button>
                
              </section>
              {(props.userId && !props.userSubgenreIds.includes(subgenre.id)) ? (

                <div className="follow-button-container">
                  <FollowButton userId={props.userId} subgenre_id={subgenre.id} follow={props.follow} setFollow={props.setFollow}/>
                </div>

              ) : (
                <div className="follow-button-container"> </div>
              )}
              </section>
              
              )
            })}
            </section>
            <section className="bottom-spacing">
            {bottomRow.map((subgenre) => {
              return (
                <section className="bottom">
                <section
                  key={subgenre.id}
                  onClick={() => props.setSubGenre(subgenre.name)}
                  className="bottom"
                >
                <button class="cybr-btn">
                    {subgenre.name}
                      <span aria-hidden class="cybr-btn__glitch">{subgenre.name}_</span>
                      <span aria-hidden class="cybr-btn__tag">R25</span>
                    </button>
                
                </section>
                {(props.userId && !props.userSubgenreIds.includes(subgenre.id)) ? (

                  <div className="follow-button-container">
                    <FollowButton userId={props.userId} subgenre_id={subgenre.id} follow={props.follow} setFollow={props.setFollow}/>
                  </div>

                ) : (
                <div className="follow-button-container"> </div>
                )}
                </section>
                
              )
            })}
            </section>
          </div>
        );
      })}
    </section>
  )};
}