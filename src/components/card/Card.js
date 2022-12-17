import './Card.scss';

export const Card = ({ toggleLikeButton, title, image, price, toggleAddButton }) => {
	return (
		<article className='card'>
			<button className='card__like' onClick={toggleLikeButton}></button>
			<img className='card__image' src={image} alt={title} />
			<h3 className='card__title'>{title}</h3>
			<span className='card__price-label'>Цена:</span>
			<span className='card__price'>{price} руб.</span>
			<button className='card__add' onClick={toggleAddButton}></button>
		</article>
	);
};
