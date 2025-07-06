import { View, Text, TextInput, KeyboardTypeOptions, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export type InputType = 'text' | 'email' | 'password' | 'date' | 'select' | "number";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  inputType: InputType;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  options?: string[];
}

const Input = ({
  label,
  placeholder,
  value,
  inputType,
  onChangeText,
  secureTextEntry,
  options
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  let keyboardType: 'default' | 'email-address' | "phone-pad" = 'default';

  if (inputType === 'email') {
    keyboardType = 'email-address';
  }

  if (inputType === 'number') {
    keyboardType = 'phone-pad';
  }


  return (
    <View className='flex flex-col gap-[4px] w-[342px] h-[70px]'>
      <Text className='font-medium text-[14px] text-dark-100'>{label}</Text>
      {inputType === 'password' ? (
        <View className="w-full h-[41px] rounded-[8px] border-[1px] border-[#CACACA] flex-row items-center px-[16px]">
          <TextInput
            className="flex-1 text-black"
            placeholder={placeholder}
            placeholderTextColor="#979797"
            value={value}
            onChangeText={onChangeText}
            keyboardType="default"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Eye color="#979797" size={20} />
            ) : (
              <EyeOff color="#979797" size={20} />
            )}
          </TouchableOpacity>
        </View>
      ) : inputType === 'select' ? (
        <View className="w-full h-[41px] rounded-[8px] border-[1px] border-[#CACACA] px-[8px] justify-center">
          <Picker
            selectedValue={value}
            onValueChange={(itemValue) => onChangeText(itemValue)}
            style={{ width: '100%', color: value ? 'black' : '#979797' }}
          >
            <Picker.Item label={placeholder} value="" color="#979797" />
            {options && options.map((option) => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
        </View>
      ) : inputType === 'date' ? (
        <>
          <Pressable
            className="w-full h-[41px] rounded-[8px] border-[1px] border-[#CACACA] px-[16px] justify-center"
            onPress={() => setShowDatePicker(true)}
          >
            <Text className={`${value ? 'text-black' : 'text-[#979797]'}`}>
              {value || placeholder}
            </Text>
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={value ? new Date(value) : new Date()}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  onChangeText(selectedDate.toISOString().split('T')[0]);
                }
              }}
            />
          )}
        </>
      ) : (
        // Normal text or email input
        <TextInput
          className="w-full h-[41px] rounded-[8px] border-[1px] py-[12px] px-[16px] border-[#CACACA]"
          placeholder={placeholder}
          placeholderTextColor="#979797"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={inputType === 'email' ? 'none' : 'sentences'}
        />
      )}
    </View>
  );
};

export default Input;
