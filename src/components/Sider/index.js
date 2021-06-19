import { Divider } from 'antd';
import React from 'react';

import ButtonClear from './ButtonClear';
import FilterPrice from './FilterPrice';
import FilterRating from './FilterRating';
import './style.scss';

const mockData = [
	{
		name: 'Appliances',
		children: [
			{
				name: 'Dishwashers',
				children: [
					{
						name: 'Built-In Dishwashers',
					},
				],
			},
			{
				name: 'Dishwashers 2',
				children: [
					{
						name: 'Built-In Dishwashers 2',
					},
				],
			},
		],
	},
	{
		name: 'Appliances 2',
		children: [
			{
				name: 'Dishwashers',
				children: [
					{
						name: 'Built-In Dishwashers',
						children: [
							{
								name: 'alo',
							},
						],
					},
				],
			},
			{
				name: 'Dishwashers 2',
				children: [
					{
						name: 'Built-In Dishwashers 2',
					},
				],
			},
		],
	},
];

export default function SideBar() {
	// const mapListCategories = (data) => {
	// 	return (
	// 		<Collapse accordion ghost>
	// 			{data.map((props, index) => {
	// 				return (
	// 					<Collapse.Panel header={props.name} key={index}>
	// 						{props?.children && mapListCategories(props.children)}
	// 					</Collapse.Panel>
	// 				);
	// 			})}
	// 		</Collapse>
	// 	);
	// };

	return (
		<aside id='sidebar'>
			<ButtonClear />
			<h3 className='show-result'>Show result for</h3>
			<Divider />
			<h3 className='show-result'>Refine by</h3>
			<h4 className='title-filter fw-7'>Type</h4>
			<h4 className='title-filter fw-7'>Brand</h4>
			<h4 className='title-filter fw-7'>Ratings</h4>
			<FilterRating />
			<h4 className='title-filter fw-7'>Prices</h4>
			<FilterPrice />
			<Divider />
		</aside>
	);
}
