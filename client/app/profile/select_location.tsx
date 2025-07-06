import { View, Text, Image } from 'react-native'
import React from 'react'
import ProfileWrapper from '@/components/authentication/ProfileWrapper'
import { images } from '@/constants/images'
import LinkButton from '@/components/LinkButton'
import { useRouter } from 'expo-router';


const select_location = () => {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Now in select health");
    router.push('/profile/select_condition');
  };


  return (
    <ProfileWrapper arrowLink={"/profile/get_to_know"} pageNumber={2} heading='Where are you based' >
      <View className='flex items-center gap-[48px]'>
        <Image
          source={images.map1}
          className=""
          resizeMode="cover"
          style={{
            transform: [{ translateY: -10 }], // shift up to show more lower part
          }}
        />

        <LinkButton name='button' buttonText='Use My Location' onPress={handleSubmit} />
      </View>
    </ProfileWrapper>
  )
}

export default select_location