import { View, Text, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AvatarImage } from '../assets';

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-gray-800 font-bold">Descubra o mundo</Text>
          <Text className="text-[36px] text-gray-800 ">das galáxias</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 round-md items-center justify-center shadow-lg">
          <Image
              source={AvatarImage}
              className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Discover