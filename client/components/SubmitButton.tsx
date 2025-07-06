import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface SubmitButtonProps {
    buttonText: string;
    onPress: () => void;
}
const SubmitButton = ({ buttonText, onPress }: SubmitButtonProps) => {
    return (
        <TouchableOpacity
            className='bg-secondary py-[16px] px-[8px] rounded-[16px] w-[300px] h-[48px]'
            onPress={onPress}>
            <Text className='text-white self-center leading-none'>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton