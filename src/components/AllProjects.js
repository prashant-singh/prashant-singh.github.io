import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../css/default.css';
import profile from '../data/profile';
import workList from '../data/workList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlay, faWindows, faApple, faGithub } from '@fortawesome/free-brands-svg-icons';

const AllProjects = () => {
	useEffect(() => {
		document.title = profile.name + ' | All Projects';
	}, []);

	return (
		<div className="container">
			<div className="row justify-content-center">
				{
					workList.map((item, index) => (
						<div className="col-12 p-3" key={item.name}>
							{
								index === workList.length || index === 0 ? null :
									<div className='border border-secondary border-top-0 border-end-0 border-start-0' />
							}
							<li className="list-group-item py-4">
								<li className="row justify-content-start">
									<div className="col-md-auto h4">
										{item.name}
									</div>
									{
										item.links.map(link =>
											<div className='col-md-auto' key={link.url}>
												<a href={link.url} className="btn text-dark badge bg-warning">
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
										)
									}
								</li>
								<div className='h9 my-2'>
									{item.detail}
								</div>
								<div>
									{
										item.tags.map(tag =>
											<span className='badge rounded text-primary border border-primary mx-2 px-2'>
												{tag}
											</span>
										)
									}
								</div>
							</li>
						</div>
					))
				}
			</div>
		</div >
	);
}
export default AllProjects;