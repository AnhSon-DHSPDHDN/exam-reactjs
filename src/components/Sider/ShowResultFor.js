import { ProductsContext } from 'contexts/context/contexts';
import React, { useContext } from 'react';

const mockData = [
	{
		name: 'Appliances',
		level: 0,
		isActive: true,
		children: [
			{
				name: 'Dishwashers',
				level: 1,
				isActive: true,
				children: [
					{
						name: 'Dishwashers 2',
						isActive: true,
						level: 2,
					},
				],
			},
			{
				name: 'item 2',
				isActive: false,
				level: 1,
			},
			{
				name: 'item 3',
				isActive: false,
				level: 1,
			},
		],
	},
	{
		name: 'Appliances 2',
		isActive: false,
		level: 0,
	},
];

function ShowResultFor() {
	const productsContext = useContext(ProductsContext);

	const mapListRefine = (data, margin) => {
		return data.map((dataItem, index) => {
			return (
				<div className={`refine-block__list ml-${margin}`} key={index}>
					<i className='fas fa-angle-right mr-1 fw-4'></i>
					<span
						className={`refine-block__text ${
							dataItem.isActive ? 'active' : ''
						}`}
					>
						{dataItem.name}
					</span>
					{dataItem.children && mapListRefine(dataItem.children, 3)}
				</div>
			);
		});
	};
	return (
		<div className='refine-block'>
			{mapListRefine(productsContext.payload?.showResultFor, 0)}
		</div>
	);
}

export default ShowResultFor;
