import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = () => {
	const [data, setData] = useState({});
	useEffect(() => {});
	return [data];
};

export default useFetchData;
