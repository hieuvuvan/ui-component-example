import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@sapo/ui-components";
import trans from "@sapo/ui-components/locales/vi.json";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "./ui/Provider.tsx";
import { routes } from "./ui/routes.ts";
import { Provider as ShopifyProvider } from "./shopify/Provider.tsx";
import { routes as shopifyRoutes } from "./shopify/routes.ts";

const router = createBrowserRouter([
  {
    path: "/ui/*",
    element: (
      <Provider>
        <Outlet />
      </Provider>
    ),
    children: routes,
  },
  {
    path: "/shopify/*",
    element: (
      <ShopifyProvider>
        <Outlet />
      </ShopifyProvider>
    ),
    children: shopifyRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider i18n={trans}>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
