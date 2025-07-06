import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const DoctorCard = () => {
    return (
        <View className='flex rounded-[8px] p-[10px] w-[160px] h-[194px] gap-[8px]'>
            {/* content 3 */}
            <View className='flex items-center gap-[10px]'>
                <View className='relative'>
                    <Image source={images.son} resizeMode='cover' className='w-[69px] h-[69px] rounded-full' />
                    <View className="absolute right-1 top-1 w-[12px] h-[12px] bg-[#07882E] rounded-full" />
                </View>

                {/* content 1 */}
                <View className='flex gap-[4px] items-center'>
                    <Text className='text-center font-medium text-[12px]'>Dr Mariam Lawal</Text>
                    <View className='flex gap-[4px] items-center'>
                        <Text className='font-normal text-[10px] leading-[10px] text-center'>Gynecologist</Text>
                        <Text className='font-normal text-[8px] text-center'>⭐️ 4.5 (135 reviews)</Text>
                        <Text className='font-normal text-[7px] text-[#07882E]'>Available today</Text>
                    </View>
                </View>
            </View>
            {/* input */}
            <TouchableOpacity className='bg-secondary w-[128px] h-[30px] rounded-[8px] px[8px] flex justify-center'>
                <Text className='font-medium text-[10px] text-[#FCFDFD] text-center'>Book Appointment</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DoctorCard