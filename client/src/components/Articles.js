import React from "react";
import "./Articles.scss"


// const genreClass = classNames("genre-list__item", {
    //   "genre-list__item--selected": props.selected,
    // });




export default function Articles(props) {

  return (
    <section className="articles-layout">
      <h1 className="cyberpunk glitched">Latest Stories</h1>
      <article className="articles-list">
        <section className="articles-info">
        <h1>Drake is engaged?</h1>

        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F15%2Fdrake-2000.jpg"></img>
        <p>The top pop artist Drake has been rumored to have an engagement set for later this year. How true is this?
          Well, we all know how rumors fly and get out of hand, however our sources tell us that this time it is legit!
          This was verified straight from one of the HipHop artists closest companions, who however wished to remain anonymous.
        </p>
        </section>
      </article>

      <article className="articles-list">
        <section className="articles-info">
        <h1>Is Lofi Music the next big thing?</h1>
        
        <img src="https://chillhop.com/wp-content/uploads/2019/09/4714a035230f599a0a58cd16d2571b5d6b269f77-1024x576.jpg"></img>
        <p> Lofi HipHop - The lesser known community of music enthusiasts are beginning to make splashes in the realm of Popular Media. 
          The genre seems to welcome you into the present, and prepares you for what’s to come. Combining music from Jazz, oldschool pop, and even voice records from the 1980's
          , it is able to bring the feeling of excitement that we all have come to seek. 
          It is an invitation to stop for a moment and enjoy the present. A chance to discover music that combines many of our favorite genres.
        </p>
        </section>
      </article>

      <article className="articles-list">
        <section className="articles-info">
        <h1>Adele was spotted with Daniel Kaluuya at Oscars afterparty</h1>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/220px-Adele_2016.jpg"></img>
        <p>Adele stepped out in Los Angeles over the weekend in a standout look.
            The "Hello" singer was spotted attending actor Daniel Kaluuya's Oscars after-party, according to E! News, 
            with some attendees sharing a few glimpses of the superstar enjoying herself at the event. For the fete, Adele wore what appears to be a 
            satin chartreuse robe with boa trim by LAPOINTE over a little black dress. In the shared clips, she's seen singing along with 
            the crowd to Ja Rule and Jennifer Lopez's 2001 hit, "I'm Real," and laughing with a friend while more music blares in the background.
        </p>
        </section>
      </article>

      <article className="articles-list">
        <section className="articles-info">
        <h1>Metallica announces new album release in over eight years</h1>
        

        <img src="https://www.metallica.com/dw/image/v2/BCPJ_PRD/on/demandware.static/-/Sites-met-master/default/dwd59e0280/images/hi-res/TBA_2LPMockup.jpg?sw=350&sh=350&sm=cut"></img>
        <p>
        The heavy metal group will drop the two-disc Hardwired…to Self-Destruct on 18 November, 
        with fans being treated to almost 80 minutes of new music. It follows 2008’s Death Magnetic, with the gap 
        between the two albums the band’s longest yet.
        </p>
        </section>
      </article>

    
      
    </section>
  );
}


