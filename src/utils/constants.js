import cart from '../images/cart.png';
import favourites from '../images/like.png';
import cabinet from '../images/own-cabinet.png';

export const headerNavigationData = [
	{
		source: cart,
		alt: 'Корзина',
		hasPrice: true,
	},
	{
		source: favourites,
		alt: 'Избранное',
		hasPrice: false,
	},
	{
		source: cabinet,
		alt: 'Личный кабинет',
		hasPrice: false,
	},
];
