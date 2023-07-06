import { AppProvider } from "@shopify/polaris";
import trans from "@shopify/polaris/locales/vi.json";

interface Props {
  children: React.ReactNode;
}

import '@shopify/polaris/build/esm/styles.css';

export function Provider({ children }: Props) {
  return <AppProvider i18n={trans}>{children}</AppProvider>;
}
