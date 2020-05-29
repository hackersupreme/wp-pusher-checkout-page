import React from 'react';

import './Header.css'

const Header = () => (

	<header className="header__container">

		<a href="/">
			
			<img className="header__logo" src={"https://dashboard.wppusher.com/wppusher-logo.png"} width={200} />

		</a>

		<nav className="header__nav">

			<a href="/" className="header__nav-item color--dark text--size--sm">Download</a>

			<a href="/" className="header__nav-item color--dark text--size--sm">Learn More</a>

			<a href="/" className="header__nav-item color--dark text--size--sm">Pricing</a>

			<a href="/" className="header__nav-item color--dark text--size--sm">Help</a>

			<a href="/" className="header__nav-item">

				<button className="header__button">Account</button>

			</a>

		</nav>

	</header>

	)

export default Header