import React from "react";
const Modal = ({ isOpen, onClose, children, showCloseButton, heading }) => {
	const overlayClass = isOpen
		? "fixed inset-0 bg-black opacity-50 z-50 transition-opacity duration-300 ease-in-out"
		: "hidden";
	const modalClass = isOpen
		? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 z-50 transition-all duration-300 ease-in-out"
		: "hidden";

	return (
		<div>
			<div className={overlayClass} onClick={onClose}></div>
			<div className={modalClass}>
				{showCloseButton && (
					<button className="absolute top-0 right-0 p-2" onClick={onClose}>
						<svg
							className="w-6 h-6 fill-current text-gray-700"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M18.364 17.364l-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414L12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95z" />
						</svg>
					</button>
				)}
				<div className="mb-2 text-xl font-bold">{heading}</div>
				{children}
			</div>
		</div>
	);
};
export default Modal;
