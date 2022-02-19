import { useRouter } from "next/router";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import { MetaMask } from "./MetaMask";
import { DarkModeToggle } from "src/helpers/DarkModeToggle";

export const NavBar = () => {
	const { asPath: path } = useRouter();

	return (
		<>
			<ToastContainer />
			<header
				className="flex justify-around items-center py-3
				border-b-2 border-gray-100 dark:border-gray-700"
			>
				<nav>
					<ul id="nav-list" className="flex flex-wrap items-center text-center">
						<li className={path === "/" ? "active-nav" : "nav-item"}>
							<Link href="/">Home</Link>
						</li>
						<li className={path === "/about" ? "active-nav" : "nav-item"}>
							<Link href="/about">About</Link>
						</li>
						<li className={path === "/snapshot" ? "active-nav" : "nav-item"}>
							<Link href="/snapshot">Snapshot</Link>
						</li>
						<li className={path === "/guestbook" ? "active-nav" : "nav-item"}>
							<Link href="/guestbook">Guestbook</Link>
						</li>
					</ul>
				</nav>
				<div className="flex items-center">
					<MetaMask />
					<div className="ml-5">
						<DarkModeToggle />
					</div>
				</div>
			</header>
		</>
	);
};
