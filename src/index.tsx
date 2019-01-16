import { h, render } from 'preact';

// Pull in global styles
import './styles/main.css';

// Pull in entry component
import Main from '~/components/Main';

// Mount application
render(<Main />, document.body);
