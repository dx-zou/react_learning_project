/* eslint-disable no-undef */
import { useEffect } from 'react';
import './index.less';

export default function Index() {
	useEffect(() => {
		new ol.Map({
			target: 'map',
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM(),
				}),
			],
			view: new ol.View({
				center: ol.proj.fromLonLat([37.41, 8.82]),
				zoom: 4,
			}),
		});
	}, []);
	return (
		<div>
			<div className='map'/>
		</div>
	);
}
