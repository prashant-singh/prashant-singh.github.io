import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../data/profile';
import '../css/default.css';
import { useEffect } from 'react';
import Author from './Author';
import Experiences from './Experiences';

const About = () => {
	useEffect(() => {
		document.title = profile.name + ' | About';
	}, []);

	return (
		<div className="container">
			<Author />
			<Experiences />
		</div >
	);
}

export default About;