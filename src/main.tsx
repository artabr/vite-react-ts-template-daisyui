import { createRoot } from 'react-dom/client';

import './index.css';
import { Layout } from './components/Layout/Layout';

const App = document.getElementById('root');
const Root = () => <Layout />;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(App!).render(<Root />);
