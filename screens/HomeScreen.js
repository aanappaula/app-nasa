import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

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

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          iterationCount="infinite"
          source={HeroImage}
          className="w-full h-full object-cover left-10 mt-22"
        />
        <TouchableOpacity 
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-39 w-24 h-24 border-l-2 border-r-2  border-t-4 border-[#BD55AF] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#BD55AF]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
