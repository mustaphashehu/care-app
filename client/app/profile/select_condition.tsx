import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProfileWrapper from '@/components/authentication/ProfileWrapper'
import LinkButton from '@/components/LinkButton';
import { useRouter } from 'expo-router';

const select_condition = () => {
  const router = useRouter();
  const tabs = [
    'Diabetes', 'Hypertension', 'Asthma',
    'Cancer', 'Heart Disease', 'Allergies',
    'Arthritis', 'Flu', 'COVID-19'
  ];
  const timeSlots = [
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '05:00 PM',
    '05:00 PM', '05:00 PM', '05:00 PM'
  ];

  const [activeTab, setActiveTab] = useState('Diabetes');
  const [activeTime, setActiveTime] = useState('');


  const handleSubmit = () => {
    console.log("Now in select health");
    router.push('/home/home_screen');
  };


  return (
    <ProfileWrapper arrowLink={"/profile/select_location"} pageNumber={3} heading='Select Health Conditions'>
      <View className="p-4 w-full">
        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          <View className="flex-row space-x-2">
            {tabs.map((tab) => (
              <Pressable
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-teal-600' : 'bg-gray-200'
                  }`}
              >
                <Text className={activeTab === tab ? 'text-white' : 'text-gray-600'}>
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* Time Slots */}
        <View className="flex-row flex-wrap justify-between">
          {timeSlots.map((slot) => (
            <Pressable
              key={slot + Math.random()} // to avoid duplicate keys
              onPress={() => setActiveTime(slot)}
              className={`w-[30%] p-2 my-2 rounded-full items-center ${activeTime === slot ? 'bg-teal-600' : 'bg-gray-200'
                }`}
            >
              <Text className={activeTime === slot ? 'text-white' : 'text-gray-600'}>
                {slot}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <LinkButton name='button' buttonText='Next'onPress={handleSubmit}/>
    </ProfileWrapper>
  )
}

export default select_condition