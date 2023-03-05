import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon, MapPinIcon, TagIcon } from 'react-native-heroicons/solid'
import React from 'react'
import Interpunct from './Interpunct'

const RestaurantCard = ({
    imageUrl,
    id,
    title,
    description,
    rating,
    genre,
    address,
    dishes,
    long,
    lat

}) => {
    return (
        <TouchableOpacity className="shadow-sm mr-3 space-y-1 w-56 bg-white p-2 rounded-md ">
            <View className="relative">
                <Image source={{ uri: imageUrl }} className="h-28 object-contain w-52 rounded-md" />
            </View>
            <View className=" flex-row space-x-2 px-1 justify-between">
                <Text className="font-semibold  ">{title}</Text>
                <View className="flex-row items-cente space-x-1 ">
                    <StarIcon size={13} color={"#FF3548"} />
                    <Text className=" text-xs text-gray-500 pb-1 ">
                        {rating}</Text>
                </View>

            </View>
            <View className=" fspace-x-2 px-1 ">
                
                <View className="flex-row items-cente space-x-1 ">
                    <MapPinIcon size={13} color={"#FF3548"} />
                    <Text className="  text-xs text-gray-500 pb-1 ">
                        {address}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard