import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { images } from '@/constants/images';
import HospitalCard from '@/components/HospitalCard';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const hospital_details = () => {

    const router = useRouter()

    const handleSubmit = () => {
        console.log("Form submitted:");
        router.push('/home/doctors');
    };

    return (
        <View className='flex-1 px-[24px] gap-[7px] bg-primary'>
            <View className='h-[50px] pt-[21px]'></View>
            {/* content 3 */}
            <View className='flex gap-[16px]'>
                {/* content 2 */}
                <View className='flex gap-[32px]'>
                    {/* map header*/}
                    <View className='flex gap-[24px]'>
                        <View className='flex gap-[12px]'>
                            <Link href="/home/nearby_hospitals" className='flex justify-start'><ArrowLeft size={24} color="black" /></Link>
                            <Text className='font-medium text-[24px]'>Details</Text>
                        </View>

                        {/* name and location */}
                        <View className='flex gap-[8px]'>
                            <View className='flex-row gap-[4px] w-[331px] h-[31px] items-center'>
                                <Image source={images.hospital} className='w-[28px] h-[28px] rounded-full' />
                                <Text className='font-medium text[14px]'>City Health Clinic</Text>
                                <Text className='font-normal text-[8px] text-[#585858]'>⭐️ 4.5 (135 reviews)</Text>
                            </View>

                            {/* location */}
                            <View className='flex-row gap-[4px] items-center'>
                                <Image source={images.material} />
                                <Text className='font-normal text-[10px] text-center'> 3.9 km away </Text>
                            </View>
                        </View>
                    </View>
                    {/* content 1 */}
                    <View className='flex gap-[16px]'>
                        <Image source={images.map1} className='w-[342px] h-[216px]' />
                        <View className='flex-row justify-between'>
                            <View className='flex-row gap-[4px] items-center'>
                                <MapPin color="#585858" className='w-[12px] h-[12px]' />
                                <Text className='font-normal text-[10px] text-[#585858]'>5 Market Street, Surulere</Text>
                            </View>

                            <TouchableOpacity className="flex-row items-center border-[1px] border-secondary rounded-[8px] w-[128px] h-[30px] justify-center" onPress={handleSubmit}>
                                <Text className="text-secondary text-base text-[10px] font-medium text-center">View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* department and operating hours */}
                {/* operating hours */}
                <View className='flex py-[8px] px-[16px] gap-[12px] rounded-[16px] bg-[#F6F8F9]'>
                    <Text className='font-medium text-[12px]'>Operating Hours</Text>
                    {/* details */}
                    <View className='flex-row gap-[8px]'>
                        <Image source={images.clock} className='w-[12px] h-[12px]' />
                        <Text className='font-normal text-[10px] text-[#585858]'>Open daily – 8:00 AM to 8:00 PM</Text>
                    </View>
                    {/* text button */}
                    <View className='flex-row gap-[4px] items-center'>
                        <View className="w-[12px] h-[12px] bg-[#07882E] rounded-full" />
                        <Text className='font-normal text-[8px] text-[#07882E] text-center'>Open Now</Text>
                    </View>
                </View>


                {/* contact info */}
                <View className='flex gap-[12px] py-[4px] px-[16px] rounded-[16px] bg-[#F6F8F9]'>
                    <Text className='font-medium text-[12px]'>Contact Info</Text>
                    <View className='flex gap-[8px]'>
                        <View className='flex-row gap-[4px]'>
                            <Image source={images.call} className='w-[14px] h-[14px]' />
                            <Text className='font-normal text-[10px] text-[#07882E]'>09098279902, 08188390020</Text>
                        </View>

                        <View className='flex-row gap-[4px]'>
                            <Image source={images.email} className='w-[14px] h-[14px]' />
                            <Text className='font-normal text-[10px] text-[#07882E]'>cityhealth@gmail.com</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default hospital_details