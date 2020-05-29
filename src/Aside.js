import React from 'react';
import Profile from './profile.jpg';
import './Aside.css';


const Aside = () => (

	<aside className="aside__container">

		<section className="aside__top-section">

			<h3 className="color--white aside__product-name">Freelancer</h3>

			<h4 className="color--white aside__price"><span>$</span>99<span>/year</span></h4>

			<p className="color--white text--size--sm"><em>Automatically renews after 1 year</em></p>

			<ul className="aside__features-list">

				<li className="color--white text--size--sm aside__list-item">Use on <strong>5</strong> client sites</li>

				<li className="color--white text--size--sm aside__list-item">Private repositories</li>

				<li className="color--white text--size--sm aside__list-item">Email Suport</li>

			</ul>

			<p className="color--white text--size--sm">Need <strong>20</strong> client sites?</p>

			<a href="/" className="color--white text--size--sm aside__link"><strong>Switch to the <em>Agency</em> plan.</strong></a>
		
		</section>

		<section className="aside__bottom-section">

			<p className="color--white text--size--sm"><em>
			FTP is horrible to deal with that. <strong>WP Pusher</strong> solves that issue, and the customer support is awesome!
			</em></p>

			<figure className="aside__testimonial-container">
				
				<img className="aside__testimonial-image" src={Profile} width={40} />

				<figcaption className="color--white text--size--sm aside__testimonial-caption">Hacker Supreme</figcaption>

			</figure>

		</section>

	</aside>

);

export default Aside