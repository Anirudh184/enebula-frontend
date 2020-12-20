import React, { useEffect, useState } from 'react';
import contentApi from '../../../api/content'; 

const HowItWorks = () => {
	const [pageContent, setPageContent] = useState('');

	useEffect(() => {
		console.log("test")
		async function fetchData () {
			const response = await contentApi.get('/pages?slug=how-we-work');
			setPageContent(response.data[0].content.rendered)

			setTimeout(() => {
				document.body.scrollTop = 0; // For Safari
  				document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			}, 100)
		}

		fetchData();
	}, []);

	return (
		<div>
			<div dangerouslySetInnerHTML = { {__html: pageContent} } />  
		</div>
	);
} 

export default HowItWorks;