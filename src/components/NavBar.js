import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import menu from '../data/menu';

function NavBar() {
	return (
		<div className='container py-4'>
			<div className='container border border-warning border-top-0 border-end-0 border-start-0'>
				<div className="nav justify-content-center align-items-center">
					{
						menu.map(item => (
							<div key={item.name} className="nav item">
								<NavLink className={(state) => state.isActive ? "nav_item_active" : "nav_item_default"} to={item.path}>{item.name}
								</NavLink>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default NavBar;