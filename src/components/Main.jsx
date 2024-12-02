import { languages } from "../assets/languages";
import Card from "./card";

export default function Main() {
	return (
		<>
			<section className="main-section">
				<ul>
					{languages.map((language) => (
						<button className="btn btn-primary">{language.title}</button>
					))}
				</ul>

				<Card />
			</section>
		</>
	);
}
