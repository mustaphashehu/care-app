import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import * as SystemUI from 'expo-system-ui';
import { Bell} from 'lucide-react-native'
import { images } from '@/constants/images'
import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import DoctorCard from '@/components/DoctorCard';
import SearchButton from '@/components/SearchButton';

const home_screen = () => {
    const router = useRouter();

    useEffect(() => {
        SystemUI.setBackgroundColorAsync('black');
    }, []);

    const handleSubmit = () => {
        console.log("Now in select health");
        router.push("/home/nearby_hospitals");
    };
    return (
        <View className='flex-1 px-[24px] pb-[24px] gap-[10px] bg-primary'>
            {/* status bar */}
            <View className='h-[50px] pt-[21px]'></View>
            {/* content3 */}
            <View className='flex-1 gap-[7px] '>
                {/* content 2 */}
                <View className='flex gap-[32px]'>
                    {/* content1 */}
                    <View className='flex gap-[24px]'>
                        {/* avatar greeting search */}
                        <View className='flex gap-[32px] pt-[16px]'>
                            {/* avatar greeting notification*/}
                            <View className='flex-row justify-between'>
                                {/* avatar + greeting */}
                                <View className='flex-row gap-[8px] w-[198px]'>
                                    <Image source={images.avatar} className='w-[32px] h-[32px] rounded-full' resizeMode='contain' />
                                    <View className='flex justify-between'>
                                        <Text className='font-normal text-[12px]'>Hi, Amira</Text>
                                        <Text className='font-medium text-[12px]'>How are you doing today?</Text>
                                    </View>
                                </View>

                                <Bell size={24} color="black" />
                            </View>
                            {/* search */}
                            <SearchButton />
                            
                        </View>
                        {/* book doctor banner */}
                        <View className='flex-row rounded-[24px] w-[342px] h-[124px] bg-[#F6F8F9] px-[8px] items-center'>
                            <View className='flex gap-[14px] w-[212px]'>
                                <Text className='font-medium text-[14px]'>Need to See a Doctor? </Text>
                                <Text className='font-normal text-[10px]'>Find trusted hospitals and clinics close to you quickly and safely.</Text>
                                <TouchableOpacity
                                    className='bg-secondary py-[8px] px-[8px] rounded-[16px] w-[128px] h-[30px]'
                                    onPress={handleSubmit}>
                                    <Text className='text-white text-[12px] text-center leading-none'>Locate a hospital</Text>
                                </TouchableOpacity>

                            </View>
                            <Image source={images.doctor1} />
                        </View>
                    </View>
                    {/* recent activities */}
                    <View className='flex gap-[12px] h-[230px]'>
                        <Text className='font-medium text-[14px] self-start'>Recent Activities</Text>
                        <View className='flex gap-[12px] rounded-[24px] py-[8px] h-[216px] items-center justify-center'>
                            <Image source={images.activity} className='w-[122px] h-[122px]' />
                            <View className='flex gap-[4px]'>
                                <Text className='font-medium text-[16px] text-center'>No Recent Activity Yet</Text>
                                <View className='flex gap-[8px] items-center'>
                                    <Text className='font-normal text-[10px] text-center'>You haven’t done anything yet. Let’s help you get started.</Text>
                                    <TouchableOpacity className="flex-row items-center self-center" onPress={() => console.log('Go to next screen')}>
                                        <Text className="text-secondary text-base">Get Started</Text>
                                        <Feather name="arrow-right" size={18} color="#002886" className="ml-1" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                    {/* all cards */}
                    <View className='flex gap-[12px]'>
                        <View className='flex-row justify-between'>
                            <Text className='font-medium text-[14px]'>Our Doctors</Text>
                            <TouchableOpacity><Text className='text-secondary font-medium'>See All</Text></TouchableOpacity>
                        </View>
                        {/* cards */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                            <View className='w-full flex-row justify-between'>
                                <DoctorCard />
                                <DoctorCard />
                                <DoctorCard />
                                <DoctorCard />
                            </View>

                        </ScrollView>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default home_screen


