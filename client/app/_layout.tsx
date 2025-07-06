import { Stack } from "expo-router";
import { useEffect } from 'react';
import { AppState, Platform, StatusBar, View } from 'react-native';
import * as SystemUI from 'expo-system-ui';
import './globals.css';

export default function RootLayout() {

  // useEffect(() => {
  //   // Status bar: both platforms
  //   StatusBar.setBarStyle('light-content');
  //   if (Platform.OS === 'android') {
  //     StatusBar.setBackgroundColor('#002886');
  //   }

  //   // Nav bar: Android only
  //   if (Platform.OS === 'android') {
  //     SystemUI.setBackgroundColorAsync('#000000');
  //     // OR: changeNavigationBarColor('#000000', true);
  //   }

  //   const subscription = AppState.addEventListener('change', (state) => {
  //     if (state === 'active' && Platform.OS === 'android') {
  //       SystemUI.setBackgroundColorAsync('#000000');
  //     }
  //   });

  //   return () => subscription.remove();
  // }, []);

  const screens = [
    { name: "(onboarding)", options: { headerShown: false } },
    { name: "authentication", options: { headerShown: false } },
    { name: "profile", options: { headerShown: false } },
    { name: "home", options: { headerShown: false } },
  ];

  return (
    <Stack>
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={screen.options}
        />
      ))}
    </Stack>
  );
}
