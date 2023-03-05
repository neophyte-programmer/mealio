import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imageUrl, title }) => {
    return (
        <TouchableOpacity className="mr-2 relative">
            <Image source={{ uri: imageUrl }} className="h-32 w-28 rounded" />
            <Text className="absolute bottom-1 left-2 text-white text-lg  font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard