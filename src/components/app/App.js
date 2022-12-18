import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Main } from '../../pages/main/Main';
import { Header } from '../header/Header';
import { Favourites } from '../../pages/favourites/Favourites';
import { Orders } from '../../pages/orders/Orders';
import { AppContext } from '../../contexts/AppContext';
import { Cart } from '../cart/Cart';

export const App = () => {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isOpenedCart, setIsOpenedCart] = useState(false);

	const handleOpenCart = () => setIsOpenedCart(true);
	const handleCloseEsc = e => e.key === 'Escape' && setIsOpenedCart(false);
	const handleCloseCart = e => e.target === e.currentTarget && setIsOpenedCart(false) && e.stopPropagation();

	useEffect(() => {
		(async () => {
			try {
				const cardsResponse = await fetch('https://62fa6e0cffd7197707ec6e08.mockapi.io/items');
				const cards = await cardsResponse.json();
				setCards(cards);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [setCards, setIsLoading]);

	return (
		<div className='container'>
			<AppContext.Provider
				value={{ cards, isLoading, isOpenedCart, handleOpenCart, handleCloseEsc, handleCloseCart }}
			>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/favourites' element={<Favourites />} />
					<Route path='/orders' element={<Orders />} />
				</Routes>
				{<Cart />}
			</AppContext.Provider>
		</div>
	);
};
