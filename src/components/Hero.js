import Clients from './Clients';
import heroDesktop from '../images/image-hero-desktop.png';
import heroMobile from '../images/image-hero-mobile.png';
import Media from 'react-media';

const Hero = () => {
	return (
		<main>
			<section className="hero-content">
				<Media queries={{ mobile: '(max-width: 750px)' }}>
					{matches => <h1>Make{matches.mobile ? ' ' : <br />}remote work</h1>}
				</Media>

				<p>
					Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
					productivity soar.
				</p>

				<button>Learn more</button>

				<Clients />
			</section>
			<Media
				queries={{
					mobile: '(max-width: 750px)'
				}}
			>
				{matches => <img className="hero-image" src={matches.mobile ? heroMobile : heroDesktop} alt="" />}
			</Media>
		</main>
	);
};

export default Hero;
