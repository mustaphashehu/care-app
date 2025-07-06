import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, { ReactNode } from 'react';
import { ArrowLeft, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';


interface ModalBoxProps {
  visible: boolean;
  onClose: () => void;
  iconType: string
  children: ReactNode;
}

const ModalBox = ({ visible, onClose, iconType, children }: ModalBoxProps) => {
  const router = useRouter();

  return (
    <Modal visible={visible} transparent animationType="fade">
      {/* Make status bar match modal background */}
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.6)" />

      {/* Fullscreen background */}
      <SafeAreaView className="flex-1 bg-black/60">
        <Pressable
          className="flex-1 justify-center items-center px-6"
          onPress={onClose}
        >
          {/* Stop propagation when tapping inside the box */}
          <Pressable
            onPress={() => {}}
            className="bg-white flex rounded-2xl w-full py-[24px] px-[29px] gap-[66px] relative"
          >
            {/* Back Arrow */}
            <TouchableOpacity onPress={onClose} className="absolute top-4 left-4">
              {iconType === "arrow" ? <ArrowLeft size={24} color="black" /> : iconType === "close" && <X size={24} color="black" />}
            </TouchableOpacity>

            {/* Envelope Image */}
            <View className="items-center gap-[40px] mt-[40px]">
              {children}
            </View>

          </Pressable>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}

export default ModalBox
