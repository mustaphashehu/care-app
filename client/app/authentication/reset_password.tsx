import AuthWrapper from "@/components/authentication/AuthWrapper";
import Input from "@/components/authentication/Input";
import LinkButton from "@/components/LinkButton";
import ModalBox from "@/components/modal/ModalBox";
import { images } from "@/constants/images";
import React, { useCallback, useState } from "react";
import {
  Image,
  Text,
  View
} from "react-native";

export default function reset_password() {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

  const toggleOpen = useCallback(() => {
    setModalVisible((prev) => !prev);
  }, []);

  const handleForgotPassword = () => {
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
        arrowLink={"/authentication/login"}
        onPress={toggleOpen}
      >
        <Input
          label="Email"
          placeholder="johndoe@gmail.com"
          value={form.email}
          inputType="email"
          onChangeText={(text) => handleInputChange("email", text)}
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
  );
}
