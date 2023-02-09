import { usePhone } from "../../features/keyboard/hooks/use.phone";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const context = usePhone();
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
