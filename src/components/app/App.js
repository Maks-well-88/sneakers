import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Main } from '../../pages/main/Main';
import { Header } from '../header/Header';
import { Favourites } from '../../pages/favourites/Favourites';
import { Orders } from '../../pages/orders/Orders';
import { AppContext } from '../../contexts/AppContext';

export const App = () => {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
			<AppContext.Provider value={{ cards, isLoading }}>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/favourites' element={<Favourites />} />
					<Route path='/orders' element={<Orders />} />
				</Routes>
				{/* <Cart /> */}
			</AppContext.Provider>
		</div>
	);
};
