import { createContext, ReactNode} from 'react';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import {DefaultTheme} from 'styled-components';

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextData {
    toggleTheme: () => void;
    theme: DefaultTheme;
}

export const ThemeContextLD = createContext({} as ThemeContextData);

export function ThemeContextProvider({children} : ThemeContextProps) {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeContextLD.Provider value={{
            toggleTheme,
            theme
        }}>
            {children}
        </ThemeContextLD.Provider>
    )
}