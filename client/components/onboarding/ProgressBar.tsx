import React from "react";
import { View } from "react-native";

type Props = {
  /** 0, 1, or 2 */
  currentPage: number;
};

const ProgressBar = ({ currentPage }: Props) => {
  const positionStyles = [
    "justify-start",
    "justify-center",
    "justify-end",
  ];

  return (
    <View className={`w-[53px] h-3 bg-slate-200 rounded-full overflow-hidden flex-row ${positionStyles[currentPage - 1]}`}>
      <View className={`w-1/3 h-full bg-emerald-700 rounded-full`} />
    </View>
  );
};

export default ProgressBar;

