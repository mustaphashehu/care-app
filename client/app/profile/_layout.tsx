import { Tabs } from 'expo-router';
import React from 'react';

// Define your tab screens in an array
const profileScreens = ['get_to_know', 'select_condition', 'select_location'];

export default function _layout() {
  return (
    <Tabs>
      {profileScreens.map((screen) => (
        <Tabs.Screen
          key={screen}
          name={screen}
          options={{
            title: 'profile',
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      ))}
    </Tabs>
  );
}
