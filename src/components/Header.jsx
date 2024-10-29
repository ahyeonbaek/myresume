import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleClickMenu = (path) => {
        navigate(path);
    }
    return(
        <header className='app-header' style={{ backgroundColor: "rgb(224 229 235)" }}>
            
            <ul>
                <li><a onClick={() => handleClickMenu("/")}>HOME</a></li>
                <li><a onClick={() => handleClickMenu("/portfolio")}>PORTFOLIO</a></li>
                <li><a onClick={() => handleClickMenu("/contact")}>CONTACT</a></li>
            </ul>
        </header>
    );
};

export default Header;