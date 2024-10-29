// import ArrowIcon from '../components/icons/ArrowIcon';
import me from '../components/imgs/me.jpg';

const HomePage = () => {
    return (
        <body style={{  backgroundColor: "rgb(224 229 235)", minHeight: "100vh" }}>
            <div className="profile"> 
                <div style={{display: "flex", justifyContent:"center"}}>
                    <img src={me} alt="my image"></img>
                </div>
                <div>
                    <h1>AHYEON BAEK</h1>
                    <ul>
                        <li>Mar 28. 2002</li>
                        <li>Korea</li>
                        <li>4641090@naver.com</li>
                        <li>010-0000-0000</li>
                    </ul>
                </div>
            </div>
            <div className="main">
                <div>
                    <h2>FrontEnd</h2>
                    <h2>Developer</h2>
                </div>
            </div>
        </body>
    );
};



export default HomePage;