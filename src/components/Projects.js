import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../css/default.css';
import profile from '../data/profile';
import workList from '../data/workList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faWindows, faApple, faGithub } from '@fortawesome/free-brands-svg-icons';
import { getAnalytics, logEvent } from "firebase/analytics";
import eventNames from '../data/eventNames';
import { Link } from 'react-router-dom';

const LogAnalyticsEvent = (eventName) => {
	const analytics = getAnalytics();

	console.log('Logging event:' + eventName);
	logEvent(analytics, eventName);
};

const Projects = () => {
	useEffect(() => {
		document.title = profile.name + ' | Projects';
		LogAnalyticsEvent(eventNames.project_page_view);
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				{
					workList.map(item => (
						<>
							{
								item.highlight === false ? null :
									<div className="col-md-8 col-lg-6 col-12 p-3" key={item.name}>
										<div className="card h-100 bg-white rounded-0">
											{
												item.img === undefined ? null : <img className="card-img-top project-thumb shadow rounded-0" src={'./' + item.img} alt="img" />
											}
											<div className="card-body">
												<h5 className="card-title h5 text-center">{item.name}</h5>
												<p className="card-text text-center text-muted">{item.detail}</p>
												<div className='row row-cols-auto d-flex justify-content-center'>
													{
														item.tags.map(tag => (
															<div className='col' key={tag}>
																<div className="col badge rounded-1 tag">{tag}</div>
															</div>
														))
													}
												</div>
												<div className='row row-cols-auto d-flex justify-content-center py-4'>
													{
														item.links.map(link => (
															<div className='col py-2' key={link.Name}>
																<a href={link.url} onClick={() => LogAnalyticsEvent(item.event_name + eventNames.project_event)} className='btn border-dark rounded-2 platformButton'>
																	{
																		(() => {

																			switch (link.Name) {
																				case 'Android':
																					return (
																						<FontAwesomeIcon icon={faGooglePlay} className='pe-1' />
																					)
																				case 'Windows':
																					return (
																						<FontAwesomeIcon icon={faWindows} className='pe-1' />
																					)
																				case 'IOS':
																					return (
																						<FontAwesomeIcon icon={faApple} className='pe-1' />
																					)
																				case 'github':
																					return (
																						<FontAwesomeIcon icon={faGithub} className='pe-1' />
																					)
																				default:
																					return (
																						<FontAwesomeIcon icon={faGlobe} className='pe-1' />
																					)
																			}

																		})()}
																	{link.Name}
																</a>
															</div>
														))
													}
												</div>
											</div>
										</div>
									</div>
							}
						</>
					))
				}
				<div className='text-center'>
					<Link to='/allprojects' className='btn btn-warning'>
						<FontAwesomeIcon icon={faBriefcase} className='pe-1 fa-regular' />
						More Projects
					</Link>
				</div>
			</div>

		</div >
	);
}

export default Projects;