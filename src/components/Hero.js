import Clients from './Clients';
import hero from '../images/image-hero-desktop.png';

const Hero = () => {
	return (
		<main>
			<section>
				<h1>
					Make<br /> remote work
				</h1>

				<p>
					Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
					productivity soar.
				</p>

				<button>Learn more</button>

				<Clients />
			</section>
			<img src={hero} alt="hero" />
		</main>
	);
};

export default Hero;
