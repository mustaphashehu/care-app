import { View, Text, ScrollView, TouchableOpacity, Image, Platform, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import * as SystemUI from 'expo-system-ui';
import DoctorCard from '@/components/DoctorCard'
import { Link } from 'expo-router';
import { images } from '@/constants/images';
import { ArrowLeft } from 'lucide-react-native';
import SearchButton from '@/components/SearchButton';
import { SafeAreaView } from 'react-native-safe-area-context';


const doctors = () => {
    const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight;

    return (
        <>
            {/* For Android: set real status bar color */}
            <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />

            <SafeAreaView className='flex-1'>
                <View className='flex-1 px-[24px] gap-[24px] bg-primary'>
                    {/* status bar */}
                    <View className='h-[50px] pt-[21px]'></View>
                    {/* chat and back arrow */}
                    <View className='flex gap-[24px]'>
                        <View className='flex gap-[12px]'>
                            <Link href="/home/home_screen" className='flex justify-start'><ArrowLeft size={24} color="black" /></Link>
                            <Text className='font-medium text-[24px]'>Doctors</Text>
                        </View>
                    </View>
                    {/* search bar */}
                    <SearchButton />
                    {/* all cards */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View className='flex-row justify-between flex-wrap'>
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>

    )
}

export default doctors