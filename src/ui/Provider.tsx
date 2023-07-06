import { AppProvider } from "@sapo/ui-components";
import trans from "@sapo/ui-components/locales/vi.json";

interface Props {
  children: React.ReactNode;
}

export function Provider({ children }: Props) {
  return <AppProvider i18n={trans}>{children}</AppProvider>;
}
