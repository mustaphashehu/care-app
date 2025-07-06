import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MapPin } from 'lucide-react-native'
import { Feather } from "@expo/vector-icons";
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';

const HospitalCard = () => {
    const router = useRouter()

    const handleSubmit = () => {
        console.log("Form submitted:");
        router.push('/home/hospital_details');
    };

    return (
        <View className='flex gap-[12px] py-[8px] px-[16px] rounded-[16px] bg-[#F6F8F9]'>
            {/* details */}
            <View className='flex gap-[8px]'>
                {/* hospital name */}
                <View className='flex-row gap-[4px] w-[331px] h-[31px] items-center'>
                    <Image source={images.hospital} className='w-[28px] h-[28px] rounded-full' />
                    <Text className='font-medium text[14px]'>City Health Clinic</Text>
                    <Text className='font-normal text-[8px] text-[#585858]'>⭐️ 4.5 (135 reviews)</Text>
                </View>
                {/* distance and location */}
                <View className='flex gap-[8px] w-[326px]'>
                    <View className='flex-row gap-[4px] items-center'>
                        <MapPin color="#585858" className='w-[12px] h-[12px]' />
                        <Text className='font-normal text-[10px] text-[#585858]'>5 Market Street, Surulere</Text>
                    </View>

                    <View className='flex-row gap-[12px] w-[260px]'>
                        {/* location */}
                        <View className='flex-row gap-[4px] items-center'>
                            <Image source={images.material} />
                            <Text className='font-normal text-[10px] text-center'> 3.9 km away </Text>
                        </View>
                        {/* working hours */}
                        <View className='flex-row gap-[4px]'>
                            <Image source={images.clock} className='w-[12px] h-[12px]' />
                            <Text className='font-normal text-[10px] text-[#585858]'>7:00 AM – 5:00 PM</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* text button */}
            <View className='flex-row justify-start'>
                <TouchableOpacity className="flex-row items-center justify-center" onPress={handleSubmit}>
                    <Text className="text-secondary text-base">View Details</Text>
                    <Feather name="arrow-right" size={18} color="#002886" className="ml-1" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HospitalCard