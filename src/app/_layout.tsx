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
import { AuthProvider } from "../contexts/auth-context";
import { useAuth } from "../hooks/use-auth";

SplashScreen.preventAutoHideAsync()

export default function Layout() {


    return (
        <SafeAreaProvider>
            <AuthProvider>
                <RootLayout />
            </AuthProvider>
        </SafeAreaProvider>
    )
}

function RootLayout() {
    const { isLoggedIn, isLoading } = useAuth();
    const [loaded, error] = useFonts({
        HostGrotesk_400Regular,
        HostGrotesk_500Medium,
        HostGrotesk_600SemiBold,
        HostGrotesk_700Bold
    })

    useEffect(() => {
        const isFontLoaded = loaded || error;
        const isUserLoaded = !isLoading;
        if (isFontLoaded && isUserLoaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded, error])

    if (!loaded && !error) {
        return null;
    }

    return (
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
    )
}