import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppProvider } from "@sapo/ui-components";
import trans from "@sapo/ui-components/locales/vi.json";
import { IndexTableExample } from "./IndexTableExample.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider i18n={trans}>
      <IndexTableExample />
    </AppProvider>
  </React.StrictMode>
);
