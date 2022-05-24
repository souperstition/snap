import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

const Clients = () => {
	return (
		<section className="clients">
			<img src={databiz} alt="databiz" />
			<img src={audiophile} alt="databiz" />
			<img src={meet} alt="databiz" />
			<img src={maker} alt="databiz" />
		</section>
	);
};

export default Clients;
