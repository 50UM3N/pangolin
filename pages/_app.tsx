import "../styles/app.scss";
import type { AppProps } from "next/app";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
const myTheme: MantineThemeOverride = {
    colorScheme: "light",
    primaryColor: "cyan",
};
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <Component {...pageProps} />
            </NotificationsProvider>
        </MantineProvider>
    );
}

export default MyApp;
