import { ReactComponent as Databiz } from '../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../images/client-meet.svg';
import { ReactComponent as Maker } from '../images/client-maker.svg';

const Clients = () => {
	return (
		<div className="clients">
			<Databiz className="clients-svg" />
			<Audiophile className="clients-svg" />
			<Meet className="clients-svg" />
			<Maker className="clients-svg" />
		</div>
	);
};

export default Clients;
