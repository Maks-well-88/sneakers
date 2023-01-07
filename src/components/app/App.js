import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './App.scss';
import { Main } from '../../pages/main/Main';
import { Header } from '../header/Header';
import { Favourites } from '../../pages/favourites/Favourites';
import { Orders } from '../../pages/orders/Orders';
import { AppContext } from '../../contexts/AppContext';
import { Cart } from '../cart/Cart';

export const App = () => {
	const [cards, setCards] = useState([]);
	const [favouritesCards, setFavouritesCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isOpenedCart, setIsOpenedCart] = useState(false);

	const handleOpenCart = () => setIsOpenedCart(true);
	const handleCloseEsc = e => e.key === 'Escape' && setIsOpenedCart(false);
	const handleCloseCart = e => e.target === e.currentTarget && setIsOpenedCart(false) && e.stopPropagation();

	const addToFavourite = async card => {
		try {
			const likedCard = await axios.put(`https://62fa6e0cffd7197707ec6e08.mockapi.io/items/${card.id}`, {
				isLiked: !card.isLiked,
			});
			const newCardsData = await axios.get('https://62fa6e0cffd7197707ec6e08.mockapi.io/items');

			if (card.isLiked) {
				setCards(newCardsData.data);
				setFavouritesCards(cards.filter(({ id, isLiked }) => id !== card.id && isLiked === true));
			} else {
				setCards(newCardsData.data);
				setFavouritesCards(prevState => [...prevState, likedCard.data]);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const cardsResponse = await axios.get('https://62fa6e0cffd7197707ec6e08.mockapi.io/items');
				setCards(cardsResponse.data);
				setFavouritesCards(cardsResponse.data.filter(card => card.isLiked === true));
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [setCards, setIsLoading]);

	return (
		<div className='container'>
			<AppContext.Provider
				value={{
					cards,
					isLoading,
					isOpenedCart,
					handleOpenCart,
					handleCloseEsc,
					handleCloseCart,
					addToFavourite,
					favouritesCards,
				}}
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
