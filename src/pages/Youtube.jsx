import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import useShortenText from '../../hooks/useShortenText';
import useCombineText from '../../hooks/useCombineText';
import { useYoutubeQuery } from '../../hooks/useYoutube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

useEffect(() => {
	// 자동 재생 버튼 기능
	document.querySelector('.btnStart').addEventListener('click', () => swiper.autoplay.start());
	document.querySelector('.btnStop').addEventListener('click', () => swiper.autoplay.stop());
}, []);

export default function Youtube() {
	const shortenText = useShortenText();
	const combineText = useCombineText();
	const { data: Vids, isPending } = useYoutubeQuery({ type: 'B' });

	//유튜브 데이터를 받을 state와 state변경함수 useState로 생성 이때 초기값을 빈 배열
	const [Vids, setVids] = useState([]);
	console.log(Vids);

	// //유튜브 데이터를 가져와서 Vids 상태에 담아주는 함수 정의
	// const fetchYoutube = () => {
	// 	const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	// 	const api_key = 'AIzaSyCtJt2jnOcXV6eLUZmF2gT6LGa3mSPkpbM';
	// 	const pid = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';
	// 	const num = 10;
	// 	const url = `${baseURL}?part=snippet&playlistId=${pid}&key=${api_key}&maxResults=${num}`;

	// 	fetch(url)
	// 		.then(data => data.json())
	// 		.then(json => {
	// 			setVids(json.items);
	// 		});
	// };

	// //의존성 배열이 비어있는 useEffect로 컴포넌트가 처음 마운트시 한번만 fetchYoutube함수 호출
	// useEffect(() => {
	// 	fetchYoutube();
	// }, []);

	return (
		<Layout title={'YOUTUBE'}>
			<div className='wrap'>
				<ul className='auto'>
					{/* <li className="btnStart"><i className="fas fa-play"></i></li>
			<li className="btnStop"><i className="fas fa-pause"></i></li> */}
				</ul>

				<Swiper
					modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
					loop={true}
					spaceBetween={0}
					slidesPerView='auto'
					centeredSlides={true}
					grabCursor={true}
					speed={1000}
					effect='coverflow'
					coverflowEffect={{
						rotate: 50,
						stretch: -100,
						depth: 400,
						modifier: 1,
						slideShadows: false
					}}
					autoplay={{ delay: 1000, disableOnInteraction: true }}
					pagination={{ el: '.swiper-pagination', type: 'fraction' }}
					navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
					className='swiper-wrapper'>
					<SwiperSlide className='swiper-slide'>
						<a href='https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL' target='_blank' rel='noopener noreferrer'>
							<div className='inner'>
								<div className='con'>
									<img src='public/thumb1.png' alt='AVALLION' />
									<h2>AVALLION</h2>
									<p>STEP INTO POSSIBILITIES</p>
								</div>
							</div>
						</a>
					</SwiperSlide>

					<SwiperSlide className='swiper-slide'>
						<div className='inner'>
							<div className='con'>
								<a href=' https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL'></a>
								<img src='public/thumb2.png' alt='PERFUME DESIGNER' />
								<h2>CREMA NERA</h2>
								<p>HIGH-PRECISION SKIN REVIVAL</p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className='swiper-slide'>
						<div className='inner'>
							<div className='con'>
								<a href=' https://youtu.be/0XPfwjw0z-Q?si=n7z9YK4bfkZoo7dL'></a>
								<img src='public/thumb3.png' alt='LIMITLESS' />
								<h2>LIMITLESS POTENTIAL</h2>
								<p>FIRST FRAGRANCE</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<div className='inner'>
							<div className='con'>
								<img src='public/thumb4.png' alt='AVALLION' />
								<h2>AVALLION</h2>
								<p>FIRST FRAGRANCE</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<div className='inner'>
							<div className='con'>
								<img src='public/thumb5.png' alt='STEP INTO POSSIBILITIES' />
								<h2>STEP INTO POSSIBILITIES</h2>
								<p>BRAND STORY</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>

				{/* 네비게이션 및 페이지네이션 요소 */}
				<div className='swiper-button-next'></div>
				<div className='swiper-button-prev'></div>
				<div className='swiper-pagination'></div>
			</div>

			<Content delay={1}>
				{isPending && <p>Loading...</p>}
				<div className='video-grid'>
					{Vids?.slice(0, 8).map((vid, idx) => (
						<article key={idx} className='video-card'>
							<p className='round'>●</p>
							<h3>
								<Link to={'/youtube/' + vid.id}>{shortenText(vid.snippet.title, 53)}</Link>
							</h3>
							<div className='txt'>
								<p>{shortenText(vid.snippet.description, 50)}</p>
								<span>{combineText(vid.snippet.publishedAt.split('T')[0], '-', '.')}</span>
							</div>
							<Pic className='thumb' src={vid.snippet.thumbnails.high.url} />
						</article>
					))}
				</div>
			</Content>
		</Layout>
	);
}
