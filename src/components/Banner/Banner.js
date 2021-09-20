import './Banner.css'

export default function Banner(){
    return(
        <>
        <div className="banner-wrapper">
            <div className="banner-info">
                <h1>Bring everyone together to build better produts</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button>Get Started</button>
            </div>
            <div className="graphs"></div>
        </div>
        </>
    )
}