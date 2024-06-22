import bimbi from "./images/bimbisara.jpg";
import neetho from "./audio/Neetho Unte Chalu.mp3";
import vijayaho from "./audio/Vijayaho.mp3";
import bimbisara from "./video/bimbisara trailer.mp4"
import './App.css';

function App() {
  return (
  <div>
   <div><u><h1 className='h1'>MOVIE: BIMBISARA</h1></u></div>
   <div><h2>Poster of the Bimbisara Movie:</h2></div>
   <img src={bimbi}></img>
   <p>
   <strong>Bimbisara is a 2022 Indian Telugu-language fantasy action film written and directed by debutant Mallidi Vassishta and produced by Kosaraju Harikrishna, under N. T. R. Arts. It starred Nandamuri Kalyan Ram in a dual role alongside, Catherine Tresa, Samyuktha Menon, Vivan Bhatena and Prakash Raj. In the film, King Bimbisara of the Trigarta Kingdom from the 5th century BC lands in the modern-day world through time travel.

   Principal photography of the film started in 2020 and ended in November 2021, with delays due to COVID-19 pandemic. Made on a budget of ₹40 crore, a major part of the film was shot at Ramakrishna Studios in Hyderabad. The film is scored by M. M. Keeravani who composed the songs with Chirrantan Bhatt. Bimbisara was released on 5 August 2022 and received critical acclaim from critics and became successful at the box office. <mark>The film had its digital premiere on ZEE5 on October 21, 2022.</mark></strong>
   </p>

   <hr></hr>

   <h2>AUDIO FILES OF BIMBISARA:</h2>
   <ol>
   <h3><li>Neetho Unte Chalu.Song</li></h3>
  <audio src={neetho} controls></audio>
  <br></br>
  <h3><li>Vijayaho.Song</li></h3>
  <audio src={vijayaho} controls></audio>
  </ol>
  <hr></hr>

  <h2>TRAILER OF BIMBISARA:</h2>
  <video src={bimbisara} controls autoPlay muted loop></video>
  <h3>Watch it on Zee5</h3>
  <hr></hr>
  </div>
  
  );
}

export default App;
