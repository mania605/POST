export default function Layout(props) {
	return (
		<main className={props.title.toLowerCase()}>
			<h2>{props.title}</h2>
			{props.children}
		</main>
	);
}
