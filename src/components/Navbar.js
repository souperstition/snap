import { useState } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as UpArrow } from '../images/icon-arrow-up.svg';
import { ReactComponent as DownArrow } from '../images/icon-arrow-down.svg';
import Features from './Features';
import React from 'react';
import Company from './Company';

const Navbar = () => {
	const [ featuresIsOpen, setFeaturesIsOpen ] = useState(false);

	const handleFeaturesClick = () => {
		setFeaturesIsOpen(!featuresIsOpen);
		setCompanyIsOpen(false);
	};

	const [ companyIsOpen, setCompanyIsOpen ] = useState(false);

	const handleCompanyClick = () => {
		setCompanyIsOpen(!companyIsOpen);
		setFeaturesIsOpen(false);
	};

	const handleClickOutside = e => {
		if (
			e.target.classList.contains('dropdown') ||
			e.target.classList.contains('features') ||
			e.target.classList.contains('company') ||
			e.target.classList.contains('company-li') ||
			e.target.classList.contains('features-li')
		) {
			return;
		}
		setFeaturesIsOpen(false);
		setCompanyIsOpen(false);
	};
	if (featuresIsOpen || companyIsOpen) {
		document.addEventListener('click', handleClickOutside);
	}

	return (
		<nav>
			<Logo className="logo" />
			<ul>
				<li className="features" onClick={handleFeaturesClick}>
					Features {featuresIsOpen ? <UpArrow /> : <DownArrow />}
					{featuresIsOpen && <Features />}
				</li>
				<li className="company" onClick={handleCompanyClick}>
					Company {companyIsOpen ? <UpArrow /> : <DownArrow />}
					{companyIsOpen && <Company />}
				</li>
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
