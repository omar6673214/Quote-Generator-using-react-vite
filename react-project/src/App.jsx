import { useState } from "react";
import "./App.css";


export default function App (){
    const [quote, setQuote] = useState("Click the button for wisdom");
    const [bgcolor , setBgcolor ] = useState("white");

 const quotes = [
    "Believe in yourself and all that you are. 💖",
    "Start where you are. Use what you have. Do what you can. 💪",
    "You were born to stand out, not fit in. 🌟",
    "Progress over perfection, always. ✨",
    "Small steps every day lead to big results. 🌱",
    "Your only limit is your mind. 🧠",
    "Dream big, work hard, stay focused. 🚀",
    "Don’t stop until you’re proud. 💥",
    "Be the energy you want to attract. ⚡",
    "Good things take time. Patience is key. ⏳",
    "It’s never too late to be what you might have been. ⏰",
    "Success is not the key to happiness. Happiness is the key to success. 😊",
    "Your vibe attracts your tribe. 🌈",
    "Keep pushing forward, no matter what. 🚶‍♀️",
    "Doubt kills more dreams than failure ever will. 💔",
    "Fall seven times, stand up eight. 💪",
    "You are your only limit. 🚧",
    "Don’t wait for opportunity, create it. 🎨",
    "Rise and shine, the world is waiting. 🌞",
    "Be fearless in the pursuit of what sets your soul on fire. 🔥",
    "Hard work beats talent when talent doesn’t work hard. 🔧"
 ]
 const color = [
 "#FFDDE1",  // blush pink
    "#D7E8BA",  // matcha pastel green
    "#B8E0D2",  // minty teal
    "#FDE2E4",  // powdery pink
    "#CDE7F0",  // baby blue
    "#F6DFEB",  // cotton candy
    "#FFF1E6",  // creamy peach
    "#E0BBE4",  // lilac dreams
    "#D6F6DD",  // light pistachio
    "#FBC4AB",  // soft coral
    "#F4C2C2",  // light rose
    "#BFD8B8",  // pastel green
    "#F9E1D3",  // peachy pastel
    "#F5A9A9",  // pastel red
    "#F2C6D9",  // pale pink
    "#D3CCE3",  // lavender mist
    "#D6E8D2",  // pale olive
    "#E9F5E1",  // mint pastel
    "#F5D0A9",  // warm pastel peach
    "#C3D9F1",  // soft blue
 ]

 const Check = ()=>{
    const randomeQuote = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[randomeQuote]);
    const randomNumber  = Math.floor(Math.random()*color.length);
    setBgcolor(color[randomNumber]);
 }

 

 return(
    <div className="app-container" style={{ background: bgcolor }}>
        <div className="quote-card">
            <h1 className="quote-text">{quote}</h1>
            <button className="inspire-button" onClick={Check}>Click Me</button>
        </div>
        <p className="footer-text">
Click the button for more wisdom!
</p>
    </div>
 )
}