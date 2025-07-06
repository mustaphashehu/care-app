import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';

// Define your tab screens in an array
const homeScreens = ['home_screen', "blog", "book_appointment", "doctors", "hospital_details", "nearby_hospitals"];

export default function _layout() {
  useEffect(() => {
        SystemUI.setBackgroundColorAsync('black');
    }, []);
  return (
    <Tabs>
      {homeScreens.map((screen) => (
        <Tabs.Screen
          key={screen}
          name={screen}
          options={{
            title: 'home',
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      ))}
    </Tabs>
  );
}
