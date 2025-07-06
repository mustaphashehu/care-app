import { View, Text, TextInput, Image } from "react-native";
import React, { useState, useCallback } from "react";
import Input from "@/components/authentication/Input";
import AuthWrapper from "@/components/authentication/AuthWrapper";
import { images } from "@/constants/images";
import ModalBox from "@/components/modal/ModalBox";
import LinkButton from "@/components/LinkButton";

export default function new_password() {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const toggleOpen = useCallback(() => {
    setModalVisible((prev) => !prev);
  }, []);

  const handleNewPassword = () => {
    console.log("Form submitted:", form);
  };

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <AuthWrapper
        header="Reset Password"
        subHeader="Enter the email address linked to your account"
        buttonText="Send Link"
        onPress={handleNewPassword}
      >
        <Input
          label="Create New Password"
          placeholder="Enter your password"
          value={form.password}
          inputType="password"
          onChangeText={(text) => handleInputChange("password", text)}
          secureTextEntry={true}
        />

        <Input
          label="Confirm New Password"
          placeholder="Enter your password"
          value={form.confirmPassword}
          inputType="password"
          onChangeText={(text) => handleInputChange("confirmPassword", text)}
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
            source={images.checkmark} // Replace with your image path
            className="w-[94px] h-[94px]"
            resizeMode="contain"
          />
          <Text className="font-medium text-[24px] text-center">
            Password Reset Successful
          </Text>
          <Text className="font-normal text-[16px] text-sooth text-center">
            You can now log in with your new password.
          </Text>
        </View>

        <View className="flex gap-[24px] items-center">
          <LinkButton
            name="link"
            buttonText="Back to Login"
            href={"/authentication/login"}
          />
        </View>
      </ModalBox>
    </>
  );
}
