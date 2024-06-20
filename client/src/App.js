import React from 'react';
import './App.css';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import petopiaLogo from './petopia.jpg';

const App = () => {
const scrollToPets = () => {
const petsSection = document.getElementById('pets');
petsSection.scrollIntoView({ behavior: 'smooth' });
};

return (
<div className="App">
<header className="header">
<img src={petopiaLogo} alt="Petopia Logo" />
<h1>Welcome to Petopia</h1>
<div className="auth-buttons">
<button className="login-button">Login</button>
<button className="register-button">Register</button>
</div>
</header>
<nav className="nav">
<ul className="nav-links">
<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#join">Join</a></li>
<li><a href="#pets">Pets</a></li>
<li><a href="#contact">Contact</a></li>
<li><a href="#customers">Our Customers</a></li>
</ul>
</nav>
<main className="content">
<section id="home">
<h2>Welcome to Petopia</h2>
<p>Your one-stop destination for adopting a loving pet.</p>
<button onClick={scrollToPets}>Adopt Now</button>
</section>
<section id="about">
<h2>About Us</h2>
<p>Petopia is dedicated to helping pets find loving homes. We work with local shelters and rescue groups to provide a platform for pet adoption.</p>
</section>
<section id="join">
<h2>Add a Pet</h2>
<PetForm />
</section>
<section id="pets">
<h2>Available Pets</h2>
<PetList />
</section>
<section id="customers">
<h2>Our Customers</h2>
<CustomerForm />
<CustomerList />
</section>
</main>
<footer>
<p>© 2024 Petopia. All rights reserved.</p>
</footer>
</div>
);
};

export default App;


