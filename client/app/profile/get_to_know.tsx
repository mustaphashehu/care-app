import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import ProfileWrapper from "@/components/authentication/ProfileWrapper";
import { images } from "@/constants/images";
import Input from "@/components/authentication/Input";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from 'expo-router';


const get_to_know = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
  });
  const router = useRouter();


  const handleSubmit = () => {
    console.log("Form submitted:", form);
    router.push('/profile/select_location');
  };

  const handleInputChange = (field: string, value: string) => {
    console.log(value);

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ProfileWrapper
      arrowLink={"/authentication/login"}
      pageNumber={1}
      heading="Let’s Get to Know You"
    >
      <Image
        source={images.beauty}
        className="w-[100px] h-[100px] rounded-full"
        resizeMode="cover"
        style={{
          transform: [{ translateY: -10 }], // shift up to show more lower part
        }}
      />

      <View className="flex gap-3">
        <Input
        label="First Name"
        placeholder="john"
        value={form.firstName}
        inputType="text"
        onChangeText={(text) => handleInputChange("firstName", text)}
      />

      <Input
        label="Last Name"
        placeholder="john"
        value={form.lastName}
        inputType="text"
        onChangeText={(text) => handleInputChange("lastName", text)}
      />

      <Input
        label="Gender"
        placeholder="Select Gender"
        value={form.gender}
        inputType="select"
        onChangeText={(text) => handleInputChange("gender", text)}
        options={["Male", "Female"]}
      />

      <Input
        label="Date of Birth"
        placeholder="mm/dd/yyyy"
        value={form.dateOfBirth}
        inputType="date"
        onChangeText={(text) => handleInputChange("dateOfBirth", text)}
      />
      </View>

      <SubmitButton buttonText="Next" onPress={handleSubmit} />
    </ProfileWrapper>
  );
};

export default get_to_know;
