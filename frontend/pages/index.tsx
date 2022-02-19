import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
			<h1 id="home-h1" style={{ fontSize: '1.8em', fontWeight: 'bold', display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh',}}>Welcome to Accrue Financial Group!</h1>
			</div>
		</>
	);
};

export default Home;
