import React from 'react'
import './popup.css'
import up from './icons/up.svg'

//https://dev.to/samwatts98/how-to-easily-animate-your-react-components-on-click-with-css-keyframes-26mg
function Popup(props){
    const [selected, setSelected] = React.useState("0")
    
    let d = new Date()
    let year = d.getFullYear()
    
    return(
        <div className="Popup" onClick={()=> {if(selected === "0")setSelected("1")}} expanded={selected} >
            <p className="PopupContent" expanded={selected}>This site was created using create-react-app. <br />All components were created by me. <br />
            <br />Icons: <br />
            <a href="https://iconscout.com/icons/linkedin" target="blank" className="CreditLink">Linkedin Icon</a> by <a href="https://iconscout.com/contributors/luc-chaffard" className="CreditLink">Luc Chaffard</a><br />
            <a href="https://iconscout.com/icons/spotify" target="blank" className="CreditLink" >Spotify Logo Icon</a> by <a href="https://iconscout.com/contributors/alexis-doreau" target="blank" className="CreditLink">Alexis Doreau</a><br />
            <a href="https://iconscout.com/icons/salesforce" target="blank" className="CreditLink">Salesforce Icon</a> by <a href="https://iconscout.com/contributors/icons8" target="blank" className="CreditLink">Icons8</a><br />
            <a href="https://iconscout.com/icons/up" target="blank" className="CreditLink">Up Icon</a> by <a href="https://iconscout.com/contributors/ricki-tri-putra" target="blank" className="CreditLink">Ricki Tri Putra</a><br />
            <a href="https://iconscout.com/icons/menu-1768000" target="blank" className="CreditLink">Menu Icon</a> by <a href="https://iconscout.com/contributors/eva-icons" target="blank" className="CreditLink">Eva Icons</a><br />
            <a href="https://iconscout.com/icons/person" target="blank" className="CreditLink">Person Icon</a> by <a href="https://iconscout.com/contributors/google-inc" target="blank" className="CreditLink">Google Inc.</a><br />
            <br />
            © Lachlan Peacock {year}
            </p>
            <button className="PopupCloseButton" onClick={()=> setSelected("0")} expanded={selected}>X</button>

            <p className="PopupTitle" onClick={()=> setSelected("1")} expanded={selected}>About this site </p>
            <img src={up} className="PopupOpenButton" onClick={()=> setSelected("1")} expanded={selected} />
            
        </div>
    )

}

export default Popup