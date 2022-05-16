import "../styles/app.scss";
import type { AppProps } from "next/app";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../components/Loader";

const myTheme: MantineThemeOverride = {
    colorScheme: "light",
    primaryColor: "cyan",
};

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        AOS.init({ once: true });
        const timer = setTimeout(() => setLoading(false), 4000);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                {loading && <Loader />}
                {!loading && <Component {...pageProps} />}
            </NotificationsProvider>
        </MantineProvider>
    );
}

export default MyApp;
