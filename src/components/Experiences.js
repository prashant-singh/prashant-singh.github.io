import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import experience from '../data/experience';

const Experiences = () => {
	return (
		<div className='row shadow p-3 mb-5 bg-white border border-secondary'>
			<p className='h2 p-2 py-2'> Experience</p>
			<div>
				{
					experience.map((item, index) => (
						<div key={item.company} className='py-2 p-2 px-2'>
							<div className='row'>
								<div className='col-1 text-start p-0' style={{ maxWidth: '15px' }}>
									<FontAwesomeIcon icon={faBriefcase} />
								</div>
								<div className='col-11'>
									<p className='h5'>{item.position}
										<small className='h6 rounded companyBG px-2 py-1 mx-2'>@{item.company}</small>
									</p>
									<p className='h9'>{item.start} - {item.end}
										{
											item.exp === null ? null : <small className='badge text-bg-secondary p-1 ms-1'>{item.exp}</small>
										}
									</p>
									<p className='h10'>{item.description}</p>
								</div>
							</div>
							{
								index === experience.length - 1 ? null :

									< div className='border border-secondary border-bottom-0 border-end-0 border-start-0 ' >
									</div>
							}
						</div>
					))
				}
			</div>
		</div >
	)
}

export default Experiences