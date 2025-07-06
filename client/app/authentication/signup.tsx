import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/authentication/Input'
import AuthWrapper from '@/components/authentication/AuthWrapper'
import ModalBox from "@/components/modal/ModalBox";
import { images } from '@/constants/images';
import LinkButton from '@/components/LinkButton';

export default function signup() {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    email: '',
    phoneNumber: "",
    password: '',
    confirmPassword: "",
  });

  const handleRegister = () => {
    // You can handle form submission here
    // For example, send form.email and form.password to your API
    console.log('Form submitted:', form);
    // Add your submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <AuthWrapper
        header='Let’s Get Started'
        subHeader='Create Your DalaCare Account'
        buttonText='Sign Up'
        onPress={handleRegister}
        noticeText='Already have an account? '
        linkText='Log in'
        href={"/authentication/login"}
      >
        <Input
          label='Email'
          placeholder='johndoe@gmail.com'
          value={form.email}
          inputType='email'
          onChangeText={text => handleInputChange('email', text)}
        />

        <Input
          label='Phone Number'
          placeholder='09011111111'
          value={form.phoneNumber}
          inputType='number'
          onChangeText={text => handleInputChange('phoneNumber', text)}
        />

        <Input
          label='Create Password'
          placeholder='Enter your password'
          value={form.password}
          inputType='password'
          onChangeText={text => handleInputChange('password', text)}
          secureTextEntry={true}
        />

        <Input
          label='Confirm Password'
          placeholder='Enter your password'
          value={form.confirmPassword}
          inputType='password'
          onChangeText={text => handleInputChange('confirmPassword', text)}
          secureTextEntry={true}
        />
      </AuthWrapper>



      <ModalBox
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        iconType="arrow"
      >
        <View className="flex gap-[16px] items-center text-center">
          <Image
            source={images.mail} // Replace with your image path
            className="w-[94px] h-[94px]"
            resizeMode="contain"
          />
          <Text className="font-medium text-[24px] text-center">
            Check Your Inbox
          </Text>
          <Text className="font-normal text-[16px] text-sooth text-center">
            We’ve sent a link to reset your password. If you don’t see it, check
            your spam folder.
          </Text>
        </View>

        <View className="flex gap-[24px] items-center">
          <LinkButton
            name="link"
            buttonText="Back to Login"
            href={"/authentication/login"}
          />
          <Text>
            Didn’t receive the email?{" "}
            <Text
              onPress={() => console.log("ppppppp")}
              className="text-center justify-self-center align-middle text-secondary font-bold"
            >
              Resend Link
            </Text>
          </Text>
        </View>
      </ModalBox>
    </>
  )
}