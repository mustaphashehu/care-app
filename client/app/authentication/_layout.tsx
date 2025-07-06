import { Tabs } from 'expo-router';
import React from 'react';

// Define your tab screens in an array
const authScreens = ['signup', 'login', 'reset_password'];

export default function _layout() {
  return (
    <Tabs>
      {authScreens.map((screen) => (
        <Tabs.Screen
          key={screen}
          name={screen}
          options={{
            title: 'Authentication',
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      ))}
    </Tabs>
  );
}
