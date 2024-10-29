import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const { pathname } = useLocation();
	console.log(pathname);

	return (
		<header>
			<h1 className='logo'>
				<Link to='/'>DCODELAB</Link>
			</h1>

			<ul className='gnb'>
				<li>
					<Link to='/member' className={pathname === '/member' ? 'on' : ''}>
						MEMBER
					</Link>
				</li>
				<li>
					<Link to='/post' className={pathname === '/post' ? 'on' : ''}>
						POST
					</Link>
				</li>
				<li>
					<Link to='/gallery' className={pathname === '/gallery' ? 'on' : ''}>
						GALLERY
					</Link>
				</li>
				<li>
					<Link to='/youtube' className={pathname === '/youtube' ? 'on' : ''}>
						YOUTUBUE
					</Link>
				</li>
				<li>
					<Link to='/contact' className={pathname === '/contact' ? 'on' : ''}>
						CONTACT
					</Link>
				</li>
			</ul>
		</header>
	);
}
