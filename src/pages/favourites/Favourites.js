import { Link } from 'react-router-dom';
import './Favourites.scss';
import sadFavourite from '../../images/sad-fafourite.png';
import arrowBack from '../../images/arrow-back.png';

export const Favourites = () => {
	return (
		<div className='favourite'>
			<img className='favourite__image' src={sadFavourite} alt='' />
			<h1 className='favourite__title'>Закладок нет :(</h1>
			<p className='favourite__description'>Вы ничего не добавляли в закладки</p>
			<Link to='/'>
				<button className='favourite__button' type='button'>
					<img className='favourite__button-image' src={arrowBack} alt='Назад' />
					<span>Вернуться назад</span>
				</button>
			</Link>
		</div>
	);
};
