import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById("root");

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(
		<React.StrictMode>
			<p>Start building amazing things with Rsbuild.</p>
		</React.StrictMode>,
	);
}
