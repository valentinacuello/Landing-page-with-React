import React from "react";
import { NavBarNico } from "./NavBarNico";
import { Navbar } from "./navbarRosario";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./DivCard";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container">
			<div id="NavBar">
				<NavBarNico />
			</div>
			<div id="NavBar">
				<Navbar />
			</div>
			<div id="Jumbotron">
				<Jumbotron />
			</div>
			<div id="DivCard" className="row">
				<Card
					title="Valentina"
					imageUrl="https://picsum.photos/200/300"
					description="Son integrante del Primer mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Valentina"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Rosario"
					imageUrl="https://picsum.photos/200/301"
					description="Son integrante del Primer mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Rosario"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Natalia"
					imageUrl="https://picsum.photos/200/302"
					description="Son integrante del Primer mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Natalia"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Nicolas"
					imageUrl="https://picsum.photos/200/303"
					description="Son integrante del Primer mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Nicolas"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Seba"
					imageUrl="https://picsum.photos/200/304"
					description="Son integrante del Primer mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Seba"
					buttonLabel="Go to wikipedia"
				/>
			</div>

			<div id="Footer">
				<Footer />
			</div>
		</div>
	);
}
