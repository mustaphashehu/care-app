import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SearchButton = () => {
    return (
        <View className="flex-row items-center bg-[#E6EBF680] border border-[#3459BA] rounded-[8px] px-[18px] h-[40px]">
            <Ionicons name="search-outline" size={20} color="#666" className="mr-2" />
            <TextInput
                placeholder="Search for doctors"
                placeholderTextColor="#666"
                className="flex-1 text-base text-black"
            />
            <TouchableOpacity>
                <MaterialIcons name="tune" size={24} color="#3459BA" />
            </TouchableOpacity>
        </View>
    )
}

export default SearchButton