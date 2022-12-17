import ContentLoader from 'react-content-loader';
import './Skeleton.scss';

export const Skeleton = () => {
	return (
		<div className='skeleton'>
			<ContentLoader
				speed={1}
				width={210}
				height={260}
				viewBox='0 0 210 260'
				backgroundColor='#ffffff'
				foregroundColor='#ecebeb'
			>
				<rect x='20' y='20' rx='10' ry='10' width='175' height='115' />
				<rect x='20' y='147' rx='5' ry='5' width='170' height='15' />
				<rect x='20' y='170' rx='5' ry='5' width='93' height='15' />
				<rect x='20' y='195' rx='8' ry='8' width='85' height='30' />
				<rect x='147' y='195' rx='8' ry='8' width='32' height='32' />
			</ContentLoader>
		</div>
	);
};
