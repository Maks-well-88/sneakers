import { useContext } from 'react';
import banner from '../../images/banner.jpg';
import { Card } from '../../components/card/Card';
import './Main.scss';
import { AppContext } from '../../contexts/AppContext';

export const Main = () => {
	const { cards } = useContext(AppContext);
	return (
		<main className='main'>
			<div className='slider'>
				<a href='/'>
					<img className='slider__banner' src={banner} alt='Баннер' />
				</a>
				<button className='slider__button' type='button'></button>
			</div>
			<section className='goods'>
				<div className='goods__search'>
					<h1 className='goods__title'>Все кроссовки</h1>
					<div className='goods__search'>
						<button className='goods__search-button' type='button'></button>
						<input
							className='goods__text-field'
							type='text'
							name='search'
							autoComplete='off'
							placeholder='Поиск...'
						/>
					</div>
				</div>
				<div className='goods__wrapper'>
					{cards &&
						cards.map(card => (
							<Card
								key={card.id}
								title={card.title}
								image={card.image}
								price={card.price}
								toggleLikeButton={card => {
									card.target.classList.toggle('card__like_active');
								}}
								toggleAddButton={card => {
									card.target.classList.toggle('card__add_active');
								}}
							/>
						))}
				</div>
			</section>
		</main>
	);
};
