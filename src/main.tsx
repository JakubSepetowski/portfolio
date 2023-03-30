import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { NavProvider } from './store/NavProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NavProvider>
			<App />
		</NavProvider>
	</React.StrictMode>
);
