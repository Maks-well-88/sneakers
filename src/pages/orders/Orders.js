import { Link } from 'react-router-dom';
import './Orders.scss';
import sadOrders from '../../images/sad-orders.png';
import arrowBack from '../../images/arrow-back.png';

export const Orders = () => {
	return (
		<div className='orders'>
			<img className='orders__image' src={sadOrders} alt='Нет заказов' />
			<h1 className='orders__title'>У вас нет заказов</h1>
			<p className='orders__description'>Вы нищеброд?</p>
			<p className='orders__description'>Оформите хотя бы один заказ.</p>
			<Link to='/'>
				<button className='orders__button' type='button'>
					<img className='orders__button-back' src={arrowBack} alt='Назад' />
					<span>Вернуться назад</span>
				</button>
			</Link>
		</div>
	);
};
