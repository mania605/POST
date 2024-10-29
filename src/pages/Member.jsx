import Layout from '../components/Layout';

export default function Member() {
	const memberData = [
		{ name: 'David', position: 'CEO', pic: '/david.jpg' },
		{ name: 'Emily', position: 'CTO', pic: '/emily.jpg' },
		{ name: 'Paul', position: 'CFO', pic: '/paul.jpg' },
		{ name: 'Julia', position: 'UI Designer', pic: '/julia.jpg' },
		{ name: 'Peter', position: 'Frontend Dev', pic: '/peter.jpg' },
		{ name: 'Emma', position: 'Backend Dev', pic: '/emma.jpg' }
	];

	return (
		<Layout title='Member'>
			<section>
				{memberData.map((data, idx) => {
					return (
						// 리턴문 안쪽에 제일 부모 jsx요소엔 무조건 key={순서값} 적용
						<article key={idx}>
							<div className='pic'>
								<img src={data.pic} alt={data.name} />
							</div>
							<h3>{data.name}</h3>
							<p>{data.position}</p>
						</article>
					);
				})}
			</section>
		</Layout>
	);
}
