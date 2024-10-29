import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import BackgroundVideo from './BackgroundVideo';
import Pic from '../components/Pic';

export default function Product() {
	const [Flickr, setFlickr] = useState([]);
	console.log(Flickr);

	useEffect(() => {
		const method = 'flickr.people.getPhotos';
		const flickr_api = import.meta.env.VITE_FLICKR_API;
		const myID = '201491599@N03';
		const num = 10;
		const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setFlickr(json.photos.photo);
			});
	}, []);

	return (
		<div className='product-page'>
			<BackgroundVideo />
			<Layout title={'Product'}>
				<section className='productList'>
					{Flickr.map((data, idx) => {
						return (
							<article key={idx}>
								<Pic
									src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
									className='pic'
								/>
								<h3>{data.title}</h3>
							</article>
						);
					})}
				</section>
			</Layout>
		</div>
	);
}
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import BackgroundVideo from './BackgroundVideo';
import Pic from '../components/Pic';


export default function Product() {
    const [ Flickr, setFlickr ] = useState([]);
    console.log(Flickr);

    useEffect(() => {
        const method = 'flickr.people.getPhotos';
        const flickr_api = import.meta.env.VITE_FLICKR_API;
        const myID = '201491599@N03';
        const num = 10;
        const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;

        fetch(url)
            .then(data => data.json())
            .then(json => {
                setFlickr(json.photos.photo);
        });
    }, []);

    return (
        <div className="product-page">
            <BackgroundVideo /> 
            <Layout title={"Product"}>
                <section className='productList'>
                    {Flickr.map((data, idx) => {
                        return (
                            <article key={idx}>
                                <Pic 
                                    src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_z.jpg`}
                                    className = 'pic'
                                />
                                <h3>{data.title}</h3>
                            </article>
                        );
                    })}
                </section>
            </Layout>
        </div>
    );
}