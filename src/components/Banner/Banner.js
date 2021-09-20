import Button from '../Button/Button'
import './Banner.css'
import Ilustration from '../../images/illustration-intro.svg'

export default function Banner(){
    return(
        <>
        <div className="banner-wrapper">
            <div className="banner-info">
                <h1>Bring everyone together to build better produts</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <Button className="btn-banner"/>
            </div>
            <div className="graphs">
                <img src={Ilustration} alt="ilustration" />
            </div>
        </div>
        </>
    )
}