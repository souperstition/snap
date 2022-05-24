import { ReactComponent as Logo } from '../images/logo.svg';

const Navbar = () => {
	return (
		<nav>
			<Logo className="logo" />
			<ul>
				<li>Features</li>
				<li>Company</li>
				<li>Careers</li>
				<li>About</li>
			</ul>
			<div className="users">
				<button>Login</button>
				<button className="register">Register</button>
			</div>
		</nav>
	);
};

export default Navbar;
