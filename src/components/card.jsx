import { languages } from "../assets/languages";
export default function Card({ id, title, description }) {
	return (
		<div className="card m-4 p-2">
			<div className="card-title">{title}</div>

			<div className="card-content">{description}</div>
		</div>
	);
}
