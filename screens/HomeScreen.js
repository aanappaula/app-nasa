import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#BD55AF] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-gray-800 text-3xl - font-semibold">Planetas</Text>
      </View>

      <View className="px-6 mt-8 space-x-1">
        <Text className="text-gray-800 text-[35px]">Visite o espaço com</Text>
        <Text className="text-[#BD55AF] text-[32px] font-bold">
          Boas Estrelas
        </Text>

        <Text className="text-gray-800 text-base">
          Explore o universo como nunca antes, com informações cativantes sobre
          planetas, estrelas e galáxias.
        </Text>
      </View>


      <View className="w-[400px] h-[400px] bg-[#BD55AF] rounded-full absolute bottom-20 -right-40"></View>
      <View className="w-[400px] h-[400px] bg-[#00F088] rounded-full absolute -bottom-28 -left-60"></View>

      <View className="flex-1 relative items-baseline justify-center">
        <Image
        source={HeroImage}
        className="w-full h-full object-cover left-10 mt-22"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
