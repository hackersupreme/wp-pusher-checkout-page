# Refactoring UI WP Pusher Checkout Page || React.js

Contents 

- Overview
- Installation
- Documentation
- Resources / Contact Info

## Overview

This is a checkout page built from a design that was featured on the Youtube series [Refactoring UI](https://www.youtube.com/channel/UCxqiDtkXtOCNJdckODHk9YA). The Youtube series released sketch files of the page design and I used them for practice.

The main focus of this was to balance structure and semantics in html and to use the css naming convention Block Element Modifier (BEM) in combination with global styles.

Install the project to see what it looks like.

Note: the design is for desktop only, so the page isn't responsive as of right now. However, due to the way the css is structured with css grids and flex boxes it shouldn't be too difficult to translate to mobile. Depending on the mobile design of course!

#### Youtube Video

https://www.youtube.com/watch?v=5gdYHlYAKDY

#### Sketch File

https://www.dropbox.com/s/wtgr2it0cb3vft1/wp-pusher-checkout.sketch?dl=0

## Installation

This assumes you have the following installed:
  - node.js 
  - node package manager (npm)

Get both here: https://nodejs.org/

###### Instructions

1. Create file directory on your local device
2. Download files to that directory

_note: PNG images are for this document, not needed for the project_

3. Using a command line software, enter the directory
```
cd directory-name
```
4. Use npm install to get the node modules
```
npm install
```
5. Use npm start to start the server
```
npm start
```

## Documentation

The top level React component for the page is called `App` and it is a `div` element containing a `Header` component, a `Main` component, and a `footer` element.

```
<div>
	<Header />
	<Main />
	<footer>...</footer>
</div>
```

The `Header` component contains the navigation of the site. Its styles are declared in the stylesheet `Header.css` which is located in the same directory. The css naming convention I used was BEM. The block for this component is called `header`. Here's an example of what that looks like in the css in the stylsheet:

```
.header__container {
  position: relative;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(172, 182, 190);
}

.header__nav {
  padding: 32px 0px;
}

.header__nav-item {
  margin-left: 32px;
  text-decoration: none;
}

.header__nav-item:hover,
.header__nav-item:focus {
  color: rgb(0, 146, 153);
}

.header__button {
  padding: 6px 8px;
  background: none;
  border: 1px solid rgb(47, 60, 70);
  border-radius: 4px;
  color: rgb(47, 60, 70);
  cursor: pointer;
}

.header__button:hover,
.header__button:focus {
  color: rgb(0, 146, 153);
  border-color: rgb(0, 146, 153);
}
```

The other component in the app is the `Main` component which contains the form of the page and the sidebar. The component's parent element is a `div` which contains a `main` element with a `form` inside and an `Aside` component that contains the sidebar.

```
<div>
	<main>
		<form>
		...
		</form>
	</main>
	<Aside />
</div>
```

The `form` inside the `main` section is split up into four sections: a header section, a `BasicInfo` component, a `PaymentInfo` component, and an `ActionContainer` component. In hindsight a better name for the `ActionContainer` should have been `SubmitContainer` or something like that. All these components are declared in the same `Main.js` file.

```
<form>
	<section>
	...
	</section>
	
	<BasicInfo />
	
	<PaymentInfo />
	
	<ActionContainer />
</form>
```

The `Main` component holds all the form values in its state and passes down setState functions as props to the two components that contain inputs, `BasicInfo` and `PaymentInfo`.

```
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
```

When an input changes, these functions are called, updating the state of the `Main` component with the new values. When a user clicks the submit button in the `ActionContainer` all the values of the form are then available to be used and a member function of the `Main` component called `handleSubmit` or something could do sometihng with the values.




## Resources / Contact Info

#### Email

jeffgsch@gmail.com

#### Website

http://hackersupreme.com

#### Resources

- [Youtube Video](https://www.youtube.com/watch?v=5gdYHlYAKDY)
- [Sketch File](https://www.dropbox.com/s/wtgr2it0cb3vft1/wp-pusher-checkout.sketch?dl=0)
- [Block Element Modifier](http://getbem.com/naming/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
