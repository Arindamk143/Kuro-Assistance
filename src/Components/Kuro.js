import redio from "../img/Kuro.gif"
import love from "../img/love.jpg"
import song1 from "../Music/1.mp3"
import song2 from "../Music/2.mp3"
import song from "../Music/love.mp3"
import React from 'react'
import "../App.css"

export default function Kuro() {
    let textCommand = document.getElementById("commandLine")
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    let kuroClicked = ()=> {
        recognition.start()
    }
    recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        speakThis(transcript.toLowerCase());
        textCommand.textContent = `🔰 ${transcript} 🔰`;
    }
    
    
    function speakThis(message) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = "I did not understand what you said please try again";
        
        if(message.includes('hey') || message.includes('hello')) {
            const finalText = "Hello Master Tell Me How May I assiste You?";
            speech.text = finalText;
        }
        else if(message.includes('what is your name?')|| message.includes("who are you?")){
            const finalText = "I'm kuro the voice assistance";
            speech.text = finalText
        }
        else if(message.includes('time')) {
            const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
            const finalText = time;
            speech.text = finalText;
        }
        else if(message.includes('date')) {
            const date = new Date().toLocaleString(undefined, {day: "numeric", month: "numeric", year:"numeric"})
            const finalText = date;
            speech.text = finalText;
        }
        else if(message.includes("who created you?")){
            const msg = "That's A Good Qustion, Arindam Created Me who is a coder also he is a fullstack website devoloper."
            speech.text = msg
        }
        else if(message.includes("who is arindam?")){
            const msg = "Arindam is a coder also he is a fullstack website devoloper."
            speech.text = msg
        }
        else if(message.includes("love")){
            const msg = "Arindam Love With Puja, She is a good girl."
            speech.text = msg
            window.open(love,"_blank")
            let music = new Audio(song)
            music.play()
        }
        else if(message.includes("open google")){
            const msg = "let's Go for google."
            speech.text = msg
            window.open("https://google.com","_blank")
        }
        else if(message.includes("open youtube")){
            const msg = "let's Go for Youtube."
            speech.text = msg
            window.open("https://youtube.com","_blank")
        }
        else if(message.includes("open instagram")){
            const msg = "let's Go for instagram."
            speech.text = msg
            window.open("https://instagram.com","_blank")
        }
        else if(message.includes("open facebook")){
            const msg = "let's Go for facebook."
            speech.text = msg
            window.open("https://facebook.com","_blank")
        }
        else if(message.includes("open your website")){
            const msg = "let's Go for my master site."
            speech.text = msg
            window.open("http://codearindam.com","_blank")
        }
        else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what i found on internet regarding " + message;
            speech.text = finalText;
        }
        else if(message.includes('play music')){
            let msg = "starting next music and injoy"
            speech.text = msg
            let music = new Audio(song1)
            document.querySelector("img").src = "https://pa1.narvii.com/6807/1ef724c92d06d15acec2ca909bbc4d80eeca211a_hq.gif"
            music.play()
        }
        else if(message.includes('stop music')){
            let msg = "music now stopped"
            speech.text = msg
            let music = new Audio(song1)
            music.pause()
        }
        else if(message.includes('next music')){
            let msg = "starting next music also and injoy"
            speech.text = msg
            let music = new Audio(song2)
            document.querySelector("img").src = "https://pa1.narvii.com/6807/1ef724c92d06d15acec2ca909bbc4d80eeca211a_hq.gif"
            music.play()
        }
        else if(message.includes('stop the music')){
            let msg = "music now stopped"
            speech.text = msg
            let music = new Audio(song2)
            music.pause()
        }
        else if(message.includes('play video')){
            let msg = "video started"
            speech.text = msg
            window.open("https://youtu.be/lW9ep22YmlM", "_blank")
        }




        else if(message.includes("stop")){
            window.close()
        }

        
        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1;
    
        speechSynthesis.speak(speech);
    }
    return (
        <>
            <button id="kuro" onClick={kuroClicked}>
                <img id="kuroImg" src={redio} alt="loading" width="300px" height="300px" />
            </button>
            <div className="labelLoad">
                <label id="commandLine"></label>
            </div>
        </>
    )
}
