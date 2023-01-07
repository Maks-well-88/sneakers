import { useState } from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export const Card = ({ onAddToFavourite, isLiked, title, image, price, toggleAddButton }) => {
	const [likeState, setLikeState] = useState(isLiked);

	const toggleLikeCard = () => {
		onAddToFavourite();
		setLikeState(!likeState);
	};

	const buttonStyle = likeState ? 'card__like card__like_active' : 'card__like';

	return (
		<article className='card'>
			<button className={buttonStyle} onClick={toggleLikeCard}></button>
			<img className='card__image' src={image} alt={title} />
			<h3 className='card__title'>{title}</h3>
			<span className='card__price-label'>Цена:</span>
			<span className='card__price'>{price} руб.</span>
			<button className='card__add' onClick={toggleAddButton}></button>
		</article>
	);
};

Card.propTypes = {
	onAddToFavourite: PropTypes.func.isRequired,
	isLiked: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	toggleAddButton: PropTypes.func.isRequired,
};
