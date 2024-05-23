import './Background.css';
import background1 from '../../assets/background.jpg';

function Background() {
    return (
        <div className="background">
            <img src={background1} alt="bg" />
        </div>
    );
}

export default Background;
