import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import {theme} from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import {CacheProvider, EmotionCache} from "@emotion/react";
type CustomAppProps=AppProps&{ emotionCache:EmotionCache}
const clientSideEmotionCache = createEmotionCache();

export default function App({
                                Component,
                                emotionCache = clientSideEmotionCache,
                                pageProps,

                            }: CustomAppProps) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
