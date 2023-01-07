import { useContext } from 'react';
import { Link } from 'react-router-dom';
import sadFavourite from '../../images/sad-fafourite.png';
import arrowBack from '../../images/arrow-back.png';
import back from '../../images/back-button.png';

import './Favourites.scss';
import { AppContext } from '../../contexts/AppContext';
import { Card } from '../../components/card/Card';

export const Favourites = () => {
	const { addToFavourite, favouritesCards } = useContext(AppContext);

	if (Boolean(!favouritesCards.length)) {
		return (
			<div className='favourite'>
				<img className='favourite__image' src={sadFavourite} alt='Печальная картинка' />
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
	}

	return (
		<section className='goods'>
			<div className='goods__title-wrapper'>
				<Link to='/'>
					<img className='goods__back-image' src={back} alt='Назад' />
				</Link>
				<h1 className='goods__title'>Мои закладки</h1>
			</div>
			<div className='goods__wrapper'>
				{favouritesCards.map(card => (
					<Card
						key={card.id}
						title={card.title}
						image={card.image}
						price={card.price}
						isLiked={card.isLiked}
						onAddToFavourite={() => addToFavourite(card)}
						toggleAddButton={card => {
							card.target.classList.toggle('card__add_active');
						}}
					/>
				))}
			</div>
		</section>
	);
};
