import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Brand from './pages/Brand';
import Product from './pages/Product';
// import Gallery from './pages/Gallery';
// import Member from './pages/Member';
import Post from './pages/Post';
import Youtube from './pages/Youtube';
import Home from './pages/Home';
import BackgroundVideo from './pages/BackgroundVideo';
import PostAdd from './pages/PostAdd';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/member' element={<Member />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/youtube' element={<Youtube />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/post' element={<Post />} />

				<Route path='/product' element={<Product />} />
				<Route path='/brand' element={<Brand />} />
				<Route path='/backgroundVideo' element={<BackgroundVideo />} />
				<Route path='/post-add' element={<PostAdd />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
