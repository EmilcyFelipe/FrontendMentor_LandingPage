import Button from '../Button/Button'
import './Simplify.css'

export default function Simplify(){
    return(
        <>
        <div className="simplify-wrapper">
            <div className="simplify-banner">
                <h2>Simplify how your team works today</h2>
            </div>
            <div>
                <Button color="hsl(12, 88%, 59%)" bg="hsl(13, 100%, 96%)"/>
            </div>
        </div>
        </>
    )
}