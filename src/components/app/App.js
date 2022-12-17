import { useEffect, useState } from 'react';
import './App.scss';
import { Main } from '../../pages/main/Main';
import { Header } from '../header/Header';
import { AppContext } from '../../contexts/AppContext';

export const App = () => {
	const [cards, setCards] = useState();

	useEffect(() => {
		(async () => {
			try {
				const cardsResponse = await fetch('https://62fa6e0cffd7197707ec6e08.mockapi.io/items');
				const cards = await cardsResponse.json();
				setCards(cards);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className='container'>
			<AppContext.Provider value={{ cards }}>
				<Header />
				<Main />
				{/* <Cart /> */}
			</AppContext.Provider>
		</div>
	);
};
