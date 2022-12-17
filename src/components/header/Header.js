import logo from '../../images/logo.jpg';
import { headerNavigationData } from '../../utils/constants';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
	return (
		<header className='header'>
			<Link className='header__link' to='/'>
				<div className='header__logo'>
					<img className='header__logo-image' src={logo} alt='Логотип' />
					<div className='header__logo-description'>
						<h2 className='header__title' lang='en'>
							react sneakers
						</h2>
						<p className='header__subtitle'>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<div className='header__details'>
				<ul className='header__items'>
					{headerNavigationData.map((item, index) => (
						<li key={index} className='header__item'>
							{item.hasLink ? (
								<Link to={item.link}>
									<img className='header__icon' src={item.source} alt={item.alt} />
								</Link>
							) : (
								<img className='header__icon' src={item.source} alt={item.alt} />
							)}
							{item.hasPrice && <span className='header__total-price'>1205 руб.</span>}
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};
