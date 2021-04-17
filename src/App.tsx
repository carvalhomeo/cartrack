import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { queryClient } from './services/query-client';
import {ToastContainer, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{height: '100vh', width: '100%'}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
    <ToastContainer
        toastStyle={{ padding: 0 }}
        bodyStyle={{ margin: 0 }}
        position={'top-right'}
        hideProgressBar={false}
        closeButton={false}
        pauseOnHover={true}
        autoClose={3000}
        transition={Flip}
      />
    </div>
  );
}

export default App;
