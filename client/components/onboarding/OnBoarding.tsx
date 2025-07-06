import ProgressBar from './ProgressBar'
import { images } from '@/constants/images'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Link, Href } from 'expo-router'
import LinkButton from '../LinkButton'

interface OnBoardingProps {
    image: any;
    title: string;
    description: string;
    pageNumber: number,
    skipText?: boolean
    buttonText: string;
    onPress?: () => void;
}

const OnBoarding: React.FC<OnBoardingProps> = ({
    image,
    title,
    description,
    pageNumber,
    skipText = true,
    buttonText,
    onPress
}) => {
    return (
        // onbarding
        <View className='bg-primary flex-1 pt-[40px] px-[24px] pb-[24px]'>
            {/* content */}
            <View className='flex-1 flex gap-[64px] items-center'>
                {/* content+skip */}
                <View className='flex flex-col items-center justify-center gap-[64px] my-8'>
                    <View className='flex-row w-full items-end justify-end h-[24px]'><Link href={"/profile/get_to_know"} className='font-semibold'>{skipText ? "Skip" : ""}</Link></View>
                    {/* image header */}
                    <View className='flex gap-4 justify-center items-center'>
                        <Image source={image} />
                        {/* header */}
                        <View className='flex gap-[8px]'>
                            <Text className='font-semibold text-[35px] text-dark-100 text-center'>{title}</Text>
                            <Text className='text-center font-normal text-sooth text-[16px]'>{description}</Text>
                        </View>
                    </View>
                    {/* progress bar */}
                    <ProgressBar currentPage={pageNumber} />
                </View>

                {/* input2 */}
                <LinkButton name='button'  buttonText={buttonText} onPress={onPress} />
            </View>
        </View>
    )
}

export default OnBoarding