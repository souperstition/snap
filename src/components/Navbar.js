import React, { useState } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as UpArrow } from '../images/icon-arrow-up.svg';
import { ReactComponent as DownArrow } from '../images/icon-arrow-down.svg';
import { ReactComponent as MenuOpen } from '../images/icon-menu.svg';
import { ReactComponent as MenuClose } from '../images/icon-close-menu.svg';
import Media from 'react-media';
import Features from './Features';
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

	const [ mobileNav, openMobileNav ] = useState(false);
	let menuToggle = 'nav-links';

	if (!mobileNav) {
		menuToggle = 'nav-links hidden';
	} else {
		menuToggle = 'nav-links';
	}

	const handleMobileClick = () => {
		openMobileNav(!mobileNav);
	};

	return (
		<nav>
			<Logo className="logo" />
			<Media queries={{ mobile: '(max-width: 750px)' }}>
				{matches =>
					matches.mobile &&
					(mobileNav ? <MenuClose onClick={handleMobileClick} /> : <MenuOpen onClick={handleMobileClick} />)}
			</Media>
			<Media queries={{ mobile: '(max-width: 750px)' }}>
				{matches => (
					<section className={matches.mobile ? menuToggle : 'nav-links'}>
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
					</section>
				)}
			</Media>
		</nav>
	);
};

export default Navbar;
