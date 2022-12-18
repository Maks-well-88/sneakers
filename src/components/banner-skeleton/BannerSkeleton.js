import ContentLoader from 'react-content-loader';

export const BannerSkeleton = () => {
	return (
		<ContentLoader
			speed={1}
			width={960}
			height={300}
			viewBox='0 0 960 300'
			backgroundColor='#ffffff'
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='20' ry='20' width='960' height='300' />
		</ContentLoader>
	);
};
