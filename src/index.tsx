import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { AlertProvider } from "./contexts/alertContext";
import { store } from "./store";
import { ErrorBoundary } from "./components/ErrorBoundary";

import "./index.css";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Provider store={store}>
        <AlertProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </AlertProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
);
