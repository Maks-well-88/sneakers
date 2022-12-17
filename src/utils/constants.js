import cart from '../images/cart.png';
import favourites from '../images/like.png';
import cabinet from '../images/own-cabinet.png';

export const headerNavigationData = [
	{
		source: cart,
		hasLink: false,
		alt: 'Корзина',
		hasPrice: true,
	},
	{
		source: favourites,
		hasLink: true,
		link: '/favourites',
		alt: 'Избранное',
		hasPrice: false,
	},
	{
		source: cabinet,
		hasLink: true,
		link: '/orders',
		alt: 'Личный кабинет',
		hasPrice: false,
	},
];
