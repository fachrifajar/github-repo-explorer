import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
