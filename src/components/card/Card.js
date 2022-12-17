import './Card.scss';

export const Card = props => {
	return (
		<article className='card'>
			<button className='card__like' onClick={props.toggleLikeButton}></button>
			<img className='card__image' src={props.image} alt={props.title} />
			<h3 className='card__title'>{props.title}</h3>
			<span className='card__price-label'>Цена:</span>
			<span className='card__price'>{props.price} руб.</span>
			<button className='card__add' onClick={props.toggleAddButton}></button>
		</article>
	);
};
