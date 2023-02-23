import React from "react";
import Toast from "./Toast";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
	const [isOpen, setOpen] = React.useState(true);
	const [metamaskInstalled, setMetamaskInstalled] = React.useState(false);

	React.useEffect(() => {
		const checkMetamaskInstalled = async () => {
			if (typeof window.ethereum !== "undefined") {
				setOpen(false);
				setMetamaskInstalled(true);
			}
		};
		checkMetamaskInstalled();
	}, []);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			{/* {!metamaskInstalled && (
				<Toast message="Metamask is not installed" type="error" />
			)} */}
			<Modal
				isOpen={isOpen}
				onClose={handleClose}
				showCloseButton={isOpen}
				heading={"Metamask is not installed on your browser."}
			>
				<div>
					<p className="mb-4">
						Please install Metamask from{" "}
						<a
							className="text-blue-500 hover:text-blue-700 underline"
							href="https://metamask.io/"
							target="_blank"
							rel="noreferrer"
						>
							Metamask.io
						</a>{" "}
						to use this feature.
					</p>
				</div>
			</Modal>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default Layout;
