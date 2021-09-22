import './Button.css'

export default function Button({bg,color}){
    
    return(
        <button className="btn-get-started" style={{color:color,backgroundColor:bg}}>Get Started</button>
    )
}