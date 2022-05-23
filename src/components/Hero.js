import Clients from './Clients';
import hero from '../images/image-hero-desktop.png';

const Hero = () => {
	return (
		<main>
			<section>
				<h1>Make remote work</h1>

				<p>
					Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
					productivity soar.
				</p>

				<button>Learn more</button>
			</section>
			<img src={hero} alt="hero" />

			<Clients />
		</main>
	);
};

export default Hero;
