import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold
} from "@expo-google-fonts/host-grotesk";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import '../styles/global.css';

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        HostGrotesk_400Regular,
        HostGrotesk_500Medium,
        HostGrotesk_600SemiBold,
        HostGrotesk_700Bold
    })

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync()
        }
    }, [loaded, error])

    if (!loaded && !error) {
        return null;
    }

    const isLoggedIn = false;

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen
                        name="(private)"
                    />
                </Stack.Protected>
                <Stack.Protected guard={!isLoggedIn}>
                    <Stack.Screen
                        name="(public)"
                    />
                </Stack.Protected>
            </Stack>
        </SafeAreaProvider>
    )
}