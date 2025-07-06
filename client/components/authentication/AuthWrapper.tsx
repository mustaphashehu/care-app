import { View, Text, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import SubmitButton from '../SubmitButton';
import { Href, Link } from 'expo-router';
import LinkButton from '../LinkButton';
import { ArrowLeft } from 'lucide-react-native';

interface AuthWrapperProps {
  header: string;
  subHeader: string;
  buttonText: string;
  onPress: () => void;
  children: ReactNode;
  noticeText?: string;
  linkText?: string;
  href?: Href | null
  arrowLink?: Href;
}

const AuthWrapper = ({
  header = "Let’s Get Started",
  subHeader = "Create Your DalaCare Account",
  buttonText,
  onPress,
  children,
  noticeText,
  linkText,
  href,
  arrowLink
}: AuthWrapperProps) => {
  return (
    <View className='flex-1 px-[24px] pb-[24px] gap-[10px] bg-primary'>
      <View className='h-[50px] pt-[21px]'></View>
      {/* form and button */}
      
      <View className={`flex ${arrowLink ? 'pt-[32px]' : 'pt-[64px]'} gap-[48px]`}>
        {arrowLink && <Link href={arrowLink} className='flex justify-start'><ArrowLeft size={24} color="black" /></Link>}
        {/* header + form */}
        
        <View className='flex gap-[40px] items-center justify-center'>
          {/* header */}
          <View className='flex gap-[4px] items-center justify-center mx-10'>
            <Text className='font-semibold text-[24px] text-center'>{header}</Text>
            <Text className='font-medium text-sooth text-[16px] text-center'>{subHeader}</Text>
          </View>

          {/* form */}
          <View className='flex gap-[16px]'>
            {children}
          </View>

          {buttonText === "Login" && <View className='flex-row w-full justify-end'><Link href="/authentication/reset_password" className='text-secondary text-[10px]'>Forgot Password?</Link></View>}
        </View>
        {/* Button + login */}
        <View className='flex gap-[32px] items-center'>
          <LinkButton name='button' buttonText={buttonText} onPress={onPress} />
            {noticeText && href && <Text className='font-medium text-[14px]'>{noticeText}<Link href={href} className='text-secondary font'>{linkText}</Link></Text>}
        </View>
        
      </View>
    </View>
  );
};

export default AuthWrapper;