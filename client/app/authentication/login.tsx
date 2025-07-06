import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/authentication/Input'
import AuthWrapper from '@/components/authentication/AuthWrapper'

export default function login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    console.log('Form submitted:', form);
  };

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <AuthWrapper
      header='Welcome Back'
      subHeader='Create Your DalaCare Account'
      buttonText='Login'
      onPress={handleLogin}
      noticeText='Don’t have an account? '
      linkText='Sign Up'
      href={"/authentication/signup"}
    >
      <Input
        label='Email'
        placeholder='johndoe@gmail.com'
        value={form.email}
        inputType='email'
        onChangeText={text => handleInputChange('email', text)}
      />

      <Input
        label='Create Password'
        placeholder='Enter your password'
        value={form.password}
        inputType='password'
        onChangeText={text => handleInputChange('password', text)}
        secureTextEntry={true}
      />
    </AuthWrapper>
  )
}