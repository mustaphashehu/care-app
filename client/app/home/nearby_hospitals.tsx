import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeft } from 'lucide-react-native';
import { Link } from 'expo-router';
import { images } from '@/constants/images';
import HospitalCard from '@/components/HospitalCard';

const nearby_hospitals = () => {
    return (
        <View className='flex-1 px-[24px] gap-[7px] bg-primary'>
            <View className='h-[50px] pt-[21px]'></View>
            {/* content */}
            <View className='flex gap-[16px]'>
                {/* map header */}
                <View className='flex gap-[32px]'>
                    {/* chat + black arrow */}
                    <View className='flex gap-[12px]'>
                        <Link href="/home/home_screen" className='flex justify-start'><ArrowLeft size={24} color="black" /></Link>
                        <Text className='font-medium text-[24px]'>Nearby Hospitals</Text>
                    </View>
                    <Image source={images.map1} className='w-[342px] h-[216px]' />
                </View>
                {/* hospital list */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className='flex gap-[12px]'>
                        <HospitalCard />
                        <HospitalCard />
                        <HospitalCard />
                        <HospitalCard />
                        <HospitalCard />
                        <HospitalCard />
                        <HospitalCard />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default nearby_hospitals