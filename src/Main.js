import React, { Component } from 'react';
import './Main.css';
import Aside from './Aside.js';



const BasicInfo = (props) => (

	<section className="basic-info__container">

		<h2 className="basic-info__header color--dark">

			<span className="basic-info__header-span">1</span> Your Basic Information

		</h2>

		<div className="basic-info__form">

			<label for="first_name" className="form--label color--dark text--size--sm">First Name</label>

			<label for="last_name" className="form--label color--dark text--size--sm">Last Name</label>

			<input 
			title="First Name" 
			type="text" 
			name="first_name" 
			placeholder="Jane" 
			className="form--input text--size--sm color--dark"
			required
			onChange={props.setFirstName}
			/>

			<input 
			title="Last Name" 
			type="text" 
			name="last_name" 
			placeholder="Doe" 
			className="form--input text--size--sm color--dark" 
			required
			onChange={props.setLastName}
			/>

			<label for="email" className="form--label color--dark text--size--sm">E-mail</label>

			<input 
			title="Email" 
			type="email" 
			name="email" 
			placeholder="janedoe@example.com" 
			className="form--input text--size--sm" 
			required
			onChange={props.setEmail}
			/>

		</div>

	</section>
);



const PaymentInfo = (props) => (

	<section className="payment-info__container">

		<h2 className="payment-info__header">
				
			<span className="payment-info__header-span">2</span> Your Payment Information
		
		</h2>

		<div className="payment-info__form">

			<label className="form--label color--dark text--size--sm">Credit Card</label>

			<input 
				title="Credit Card Number" 
				type="tel"
			 	name="card_number" 
			 	inputMode="numeric" 
			 	pattern="[0-9\s]{13,19}" 
			 	maxlength="19" 
			 	placeholder="Credit Card Number" 
			 	className="form--input text--size--sm color--dark" 
			 	required
			 	onChange={props.setCardNumber}
			 />

			<input 
				title="2 Digits Month / Last 2 Digits Year" 
				type="text" 
				name="card_expiration" 
				placeholder="MM / YY" 
				pattern="[0-9][0-9]\/[2-9][0-9]" 
				className="form--input text--size--sm color--dark" 
				maxlength="5"
				required
				onChange={props.setCardExpiration}
			/>

			<input 
				title="3 Digit CVC" 
				type="text" 
				name="card_cvc" 
				placeholder="CVC" 
				pattern="[0-9][0-9][0-9]"
				maxlength="3"
				className="form--input text--size--sm color--dark" 
				required
				onChange={props.setCardCVC}
			/>

		</div>

	</section>	

);



const ActionContainer = () => (

	<section className="action__container">

		<input type="submit" className="action__button" value="Buy WP Pusher" />

		<p className="color--dark text--size--sm action__copy">

			<span className="action__q">?</span><strong>Need any help?</strong> Dont hesitate to <a className="action__link" href="/">contact support</a>!
			
		</p>

	</section>

)



class Main extends Component {

	constructor() {
		super();
		this.state = {
			first_name: null,
			last_name: null,
			email: null,
			card_number: null,
			card_expiration: null,
			card_cvc: null
		}
		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {

		console.log(this.state);

		e.preventDefault();

		alert('form values logged in console')
	}

	render() {

		return(

		<div class="main__container">

			<main>

				<form onSubmit={e => this.submitForm(e)}>

					<section className="main__header">

						<h1 className="color--dark">
							Checkout
						</h1>

					</section>

					<BasicInfo 
						setFirstName={e => this.setState({first_name: e.target.value})}
						setLastName={e => this.setState({last_name: e.target.value})}
						setEmail={e => this.setState({email: e.target.value})}
					/>

					<PaymentInfo 
						setCardNumber={e => this.setState({card_number: e.target.value})}
						setCardExpiration={e => this.setState({card_expiration: e.target.value})}
						setCardCVC={e => this.setState({card_cvc: e.target.value})}
					/>

					<ActionContainer />

				</form>

			</main>

			<Aside />

		</div>

		)
	}
}


export default Main