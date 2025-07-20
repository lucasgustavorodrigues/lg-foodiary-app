import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold
} from "@expo-google-fonts/host-grotesk";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { useFonts } from '@expo-google-fonts/host-grotesk';
import { useEffect } from 'react';
import './styles/global.css';

import * as SplashScreen from "expo-splash-screen";
import { HomeHeader } from "./components/home-header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DateSwitcher } from "./components/date-switcher";
import { DailyStats } from "./components/daily-stats";
import { MealsList } from "./components/meals-list";
import { Home } from "./screens/home";

SplashScreen.preventAutoHideAsync()

export default function App() {
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

  return (
    <View className='bg-white flex-1'>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </View>
  );
}


