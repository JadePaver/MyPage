
import github from '../assets/github.svg'
import insta from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export const Footer = () => {
    return (
        <>
        <div className='footer-line'/>
            <footer className="main-footer">

                <div className="footer-name">Zakkur29</div>
                <div className="container main-footer-container">

                    <h></h>
                    <ul className="footer-nav">
                        <li>
                            <a href="https://github.com/JadePaver"><img className="footer-logo" src={github} alt="f-git" width="40" height="40" /></a>
                        </li>
                        <li>
                            <a href=" "><img className="footer-logo" src={insta} alt="f-insta" width="40" height="40" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jade-paver-a6073a280/"> <img className="footer-logo" src={linkedin} alt="f-linkedIn" width="40" height="40" /></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}



