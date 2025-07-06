import { View, Text, } from 'react-native'
import React, { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react-native';
import { Href, Link } from 'expo-router';

interface ProfileWrapperProps {
    arrowLink: Href;
    pageNumber: number;
    heading: string
    children: ReactNode
}

const ProfileWrapper = ({ arrowLink, pageNumber, heading, children }: ProfileWrapperProps) => {
    return (
        <View className='flex-1 px-[24px] pb-[24px] gap-[10px] bg-primary'>
            <View className='h-[50px] pt-[21px]'></View>

            {/* content 3 */}
            <View className='flex gap-[32px]'>
                <Link href={arrowLink} className='flex-row justify-start'><ArrowLeft size={24} color="black" /></Link>
                <View className='flex-row justify-end'><Link href={"/(onboarding)"} className='font-medium text-[16px] text-secondary'>skip</Link></View>
                <View className='flex gap-[48px]'>
                    <View className='flex gap-[8px]'>
                        <View className='flex-row justify-center'><Text className='font-normal text-[16px] text-secondary'>Step {pageNumber} of 3</Text></View>
                        <Text className='font-medium text-[24px] text-center'>{heading}</Text>
                    </View>

                    <View className='flex items-center justify-center gap-6'>
                        {children}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileWrapper