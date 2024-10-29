import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Youtube() {
	//유튜브 데이터를 받을 state와 state변경함수 useState로 생성 이때 초기값을 빈 배열
	const [Vids, setVids] = useState([]);
	console.log(Vids);

	//유튜브 데이터를 가져와서 Vids 상태에 담아주는 함수 정의
	const fetchYoutube = () => {
		const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
		const api_key = 'AIzaSyCtJt2jnOcXV6eLUZmF2gT6LGa3mSPkpbM';
		const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
		const num = 10;
		const url = `${baseURL}?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

		fetch(url)
			.then(data => data.json())
			.then(json => {
				setVids(json.items);
			});
	};

	//의존성 배열이 비어있는 useEffect로 컴포넌트가 처음 마운트시 한번만 fetchYoutube함수 호출
	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<Layout title='Youtube'>
			{Vids.map((data, idx) => {
				return (
					<article key={idx}>
						<h3>
							<Link to={`/detail/${data.snippet.resourceId.videoId}`}>{data.snippet.title.substr(0, 80)}</Link>
						</h3>

						<div className='txtBox'>
							<p>{data.snippet.description.substr(0, 150)}</p>
							<span>{data.snippet.publishedAt.split('T')[0]}</span>
						</div>

						<div className='picBox'>
							<img src={data.snippet.thumbnails.high.url} alt={data.snippet.title} />
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
