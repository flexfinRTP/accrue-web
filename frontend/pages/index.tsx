import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<div style={{ position: "absolute", left: "43%", top: "5%" }}>
					<Image src={logo} alt="Accruefg logo" width={250} height={200} />
				</div>
				<br /><br /><br /><br />
				<h1 id="home-h1" style={{ fontSize: '1.8em', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
					Welcome to Accrue Financial Group!
				</h1>
			</div>
		</>
	);
};

export default Home;
