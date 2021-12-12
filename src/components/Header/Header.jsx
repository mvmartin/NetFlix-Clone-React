import react from "react";
import './style.css'
import netflixIcon from '../imgs/netflix.svg'

const Header = ({black}) => {
    return(

        <div className={black? 'black-header' : '' }>
            <div className="header">
                <img  className="logo-netflix" src={netflixIcon} alt="Netflix logo" />
            </div>
        </div>

    );
}

export default Header;