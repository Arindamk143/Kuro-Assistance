import React from 'react'
import "./App.css"
import Kuro from './Components/Kuro'

export default function App() {
  function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.lang= "bn";
    window.speechSynthesis.speak(text_speak);
  }
  function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
      speak("Good Morning Master");
    }

    else if (hr === 12) {
      speak("Good noon Master");
    }

    else if (hr > 12 && hr <= 17) {
      speak("Good Afternoon Master");
    }

    else {
      speak("Good Evening Master");
    }
  }
  
  window.addEventListener('load', () => {
    speak("Kuro The Assistance Activeted So How May I Help You?");
    wishMe();
  })
  return (
    <>
      <div className="headTag" id='headTag'>
        <h1>Kuro The Asssitance</h1>
      </div>
      <div className="assistance">
        <Kuro />
      </div>
    </>
  )
}
