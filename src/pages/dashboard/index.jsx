import { useState } from 'react';
import { Button, Space } from 'antd';
import './index.less';

const list = [1, 2, 3, 4, 5, 6];

const Index = () => {
	const [state, setState] = useState(0);
	const move = e => {
		const x = e.pageX - e.target.offsetLeft;
		const y = e.pageY - e.target.offsetTop;
		e.target.style.setProperty('--x', `${x}px`);
		e.target.style.setProperty('--y', `${y}px`);
	};
	return (
		<div>
			<ul className='strip-loading'>
				{list.map(item => (
					<li key={item} style={{ '--line-index': item }} />
				))}
			</ul>
		</div>
	);
};

export default Index;
