import Clients from './Clients';
import heroDesktop from '../images/image-hero-desktop.png';

const Hero = () => {
	return (
		<main>
			<section className="hero-content">
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
			<img className="hero-desktop" src={heroDesktop} alt="hero" />
		</main>
	);
};

export default Hero;
