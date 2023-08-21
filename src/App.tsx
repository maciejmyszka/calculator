import { CalculatorView } from './views/CalculatorView';
import { AppProvider } from './providers/AppProvider';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <AppProvider>
    <CalculatorView />
  </AppProvider>
);

export default App;
