import './Feedback.css';

export default function Feedback({photo,name,comment}){
    return(
        <div className="feedback-item">
            <img src={photo} alt="User foto" />
            <h5>{name}</h5>
            <p>{comment}</p>
        </div>
    )
}