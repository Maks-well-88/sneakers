import { useContext, useEffect } from 'react';
import './Cart.scss';
import { AppContext } from '../../contexts/AppContext';
import arrow from '../../images/arrow.svg';

export const Cart = () => {
	const { isOpenedCart, handleCloseCart, handleCloseEsc } = useContext(AppContext);
	const overlay = isOpenedCart ? 'overlay overlay_opened' : 'overlay';

	useEffect(() => {
		document.addEventListener('keydown', handleCloseEsc);
		return () => document.removeEventListener('keydown', handleCloseEsc);
	}, [isOpenedCart, handleCloseEsc]);

	return (
		<div className={overlay} onClick={handleCloseCart}>
			<div className='drawer'>
				<h2 className='drawer__title'>Корзина</h2>
				<button type='button' className='drawer__close-button' onClick={handleCloseCart}></button>
				<ul className='drawer__items'>
					<li className='drawer__item'>
						<img
							src='../images/sneakers-1.jpg'
							alt='Мужские Кроссовки Nike Blazer Mid Suede'
							className='drawer__image'
						/>
						<div className='drawer__item-description'>
							<h3 className='drawer__item-title'>Мужские Кроссовки Nike Blazer Mid Suede</h3>
							<span className='drawer__item-price'>12 999 руб.</span>
						</div>
						<button type='button' className='drawer__item-button'></button>
					</li>
					<li className='drawer__item'>
						<img
							src='../images/sneakers-2.jpg'
							alt='Мужские Кроссовки Nike Air Max 270'
							className='drawer__image'
						/>
						<div className='drawer__item-description'>
							<h3 className='drawer__item-title'>Мужские Кроссовки Nike Air Max 270</h3>
							<span className='drawer__item-price'>12 999 руб.</span>
						</div>
						<button type='button' className='drawer__item-button'></button>
					</li>
				</ul>
				<div className='drawer__total'>
					<span className='drawer__total-info'>Итого:</span>
					<div className='drawer__total-line'></div>
					<span className='drawer__total-sum'>21 498 руб.</span>
				</div>
				<div className='drawer__total'>
					<span className='drawer__total-info'>Налог 5%:</span>
					<div className='drawer__total-line'></div>
					<span className='drawer__total-sum'>1 074 руб.</span>
				</div>
				<button type='button' className='drawer__order-button'>
					Оформить заказ
					<img className='drawer__order-arrow' src={arrow} alt='Стрелка' />
				</button>
			</div>
		</div>
	);
};
