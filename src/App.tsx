import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Switch, BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { queryClient } from './services/query-client';

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
    </div>
  );
}

export default App;
