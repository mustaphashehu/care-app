import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Href } from 'expo-router'

export type NameType = "link" | "button"

interface LinkButtonProps {
    name: NameType;
    buttonText?: string;
    onPress?: () => void;
    href?: Href;
}
const LinkButton = ({ name, buttonText, onPress, href }: LinkButtonProps) => {
    return (
        <>
            {name === "link" && href ?
                <Link href={href} className='bg-secondary py-[16px] px-[8px] rounded-[16px] w-[300px] h-[48px] text-center'>
                    <Text className='text-white leading-none'>{buttonText}</Text>
                </Link> 
                : name === "button" &&
                <TouchableOpacity
                    className='bg-secondary py-[16px] px-[8px] rounded-[16px] w-[300px] h-[48px]'
                    onPress={onPress}>
                    <Text className='text-white self-center leading-none'>{buttonText}</Text>
                </TouchableOpacity>
            }
        </>
    )
}

export default LinkButton