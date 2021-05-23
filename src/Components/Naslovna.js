import '../App.css';
import Header from "../Header.js";
import Footer from "../Footer.js";
import Kong from "../kingkong.jpg";
import Brzi from "../brzizestoki.jpg";
import Profil from "../profilfilm.jpg";
import Mortal from "../mortal.jpg";
import Covid from "../covid19.jpg";


function Naslovna() {
  return (
    <div className="Naslovna">
        <Header/>

<br/>
<br/>
        <h1>2021</h1>
        <div className="tekst">
          <h2>Godzilla VS Kong</h2> 
          <img src={Kong} className="kong"/>
          <p>Godzilla vs. Kong is a 2021 American monster film directed by Adam Wingard. 
            A sequel to Godzilla: King of the Monsters (2019) and Kong: Skull Island (2017), it is the fourth film in Legendary's MonsterVerse. It is also the 36th film in the Godzilla franchise, the 12th film in the King Kong franchise, and the fourth Godzilla film to be completely produced by a Hollywood studio.
            [b] The film stars Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shun Oguri, Eiza González, Julian Dennison, Lance Reddick, Kyle Chandler, and Demián Bichir. In the film, Kong clashes with Godzilla as humans lure the ape into the Hollow Earth to retrieve a power source for a weapon to stop Godzilla's mysterious rampages.</p>
          <hr/>
        </div>
        <div className="tekst">
          <h2>Brzi i zestoki 9</h2>
          <img src={Brzi} className="brzizestoki"/>
          <p>F9 (also known as Fast & Furious 9) is a 2021 American action film directed by Justin Lin, who also co-wrote the screenplay with Daniel Casey.
             It is the sequel to The Fate of the Furious (2017), the ninth main installment, and the tenth full-length film released overall in the Fast & Furious franchise. The first film since Fast & Furious 6 (2013) to be directed by Lin and the first since 2 Fast 2 Furious (2003) not to be written by Chris Morgan, F9 stars Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris "Ludacris" Bridges, John Cena, Jordana Brewster, Nathalie Emmanuel, Sung Kang, Michael Rooker, Helen Mirren, Kurt Russell, and Charlize Theron.</p>
          <hr/>
        </div>
        <div className="tekst">
          <h2>Profil</h2>
          <img src={Profil} className="profil"/>
          <p>Profile is a 2021 computer screen thriller directed by Timur Bekmambetov, from a screenplay by Bekmambetov, Britt Poulton, and Olga Kharina, based upon the non-fiction book In The Skin of a Jihadist by Anna Erelle. It stars Valene Kane, Shazad Latif, Christine Adams, Amir Rahimzadeh and Morgan Watkins.</p>
        
          <hr/>
        </div>
        <div className="tekst">
          <h2>Mortal Kombat</h2>
          <img src={Mortal} className="mortal"/>
          <p>Mortal Kombat is a 2021 American martial arts fantasy film based on the video game franchise of the same name and a reboot of the Mortal Kombat film series.[4] The film stars Lewis Tan, Jessica McNamee, Josh Lawson, Tadanobu Asano, Mehcad Brooks, Ludi Lin, Chin Han, Joe Taslim, and Hiroyuki Sanada. It is directed by Simon McQuoid (in his feature directorial debut), from a screenplay by Greg Russo and Dave Callaham and a story by Russo and Oren Uziel.[5]</p>
          <hr/>
        </div>
        
        <div className="tekst">
          <h2>#ostanimoodgovorni</h2>
          <p>Zbog takozvane pandemije Korona virusa, obavijestavamo vas da obavezno se drzi razmak od 2m te da je obavezno nosenje maski.</p>
          <img src={Covid} className="covid"/>
          
        </div>
        <Footer/>
    </div>
  );
}

export default Naslovna;