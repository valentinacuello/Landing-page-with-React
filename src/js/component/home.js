import React from "react";
//import NavbarNico from "./navbarNico";
//import NavBar from "./navbarRosario";
//import Jumbotron from "./Jumbotron.js";
import Card from "./DivCard.js";
//import Footer from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			{/* <div id="NavBar">
				<NavBar />
			</div>
			<div id="Jumbotron"></div> */}
			<div id="DivCard container-fluid">
				<Card
					title="Valentina"
					imageUrl="https://picsum.photos/200/300"
					description="Son integrante del Segundo mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Valentina"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Rosario"
					imageUrl="https://picsum.photos/200/301"
					description="Son integrante del Segundo mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Rosario"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Natalia"
					imageUrl="https://picsum.photos/200/302"
					description="Son integrante del Segundo mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Natalia"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Nicolas"
					imageUrl="https://picsum.photos/200/303"
					description="Son integrante del Segundo mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Nicolas"
					buttonLabel="Go to wikipedia"
				/>
				<Card
					title="Seba"
					imageUrl="https://picsum.photos/200/304"
					description="Son integrante del Segundo mejor grupo."
					buttonUrl="https://en.wikipedia.org/wiki/Seba"
					buttonLabel="Go to wikipedia"
				/>
			</div>
			<div id="Footer">
				<footer />
			</div>
		</div>
	);
}
