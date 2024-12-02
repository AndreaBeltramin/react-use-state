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

				<div className="container">
					{languages.map((language) => (
						<Card
							key={language.id}
							id={language.id}
							title={language.title}
							description={language.description}
						/>
					))}
				</div>
			</section>
		</>
	);
}
