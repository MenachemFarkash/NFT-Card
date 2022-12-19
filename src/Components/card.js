import '../index.css';
import NFT from '../images/image-equilibrium.jpg';
import ETH from '../images/icon-ethereum.svg';
import Clock from '../images/icon-clock.svg';
import ProfilePicture from '../images/image-avatar.png';

const Card = () => {
    return (
        <div className="cardContainer">
            <img className="nftImage" src={NFT} />
            <h1 className="nftName">Equilibrium #3429</h1>
            <p className="nftDescription"> Our Equilibrium collection promotes balance and calm.</p>
            <div className="sellInfo">
                <p className="nftValue">
                    <img className="ETH" src={ETH} />
                    0.041 ETH
                </p>
                <div>
                    <p className="timeLeft">
                        <img className="clock" src={Clock} /> 3 days left
                    </p>
                </div>
            </div>
            <div className="profileInfo">
                <img className="profilePicture" src={ProfilePicture}></img>
                <p className="creatorInfo">
                    Creation of <span className="creatorName">Jules Wyvern</span>
                </p>
            </div>
        </div>
    );
};

export default Card;
