import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, id }) => {
    return (
        <View className="py-4">
            <View className="flex-row items-center">
                <View className="flex-1">
                    <Text className="font-bold text-xl"> {title} </Text>
                    <Text className="text-xs text-gray-500"> {description} </Text>
                </View>
                <View>
                    <ArrowRightIcon size={17} color={"#FF3548"} />
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-2" contentContainerStyle={{
                paddingHorizontal: 4,
                paddingBottom: 4,
            }} >
                <RestaurantCard
                    id="124432"
                    imageUrl="https://media.istockphoto.com/id/495203930/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=8edwwuHS5j70L_2b3J3Tc8q1COexi8oAYjVu4hJXqbo="
                    title="The Burger Joint"
                    description="Burgers, Fast Food"
                    rating={4.5}
                    genre="Cravings"
                    address="Bush Canteen"
                    dishes={[]}
                    long={-73.9876}
                    lat={40.7661}

                />
                <RestaurantCard
                    id="124432"
                    imageUrl="https://img.freepik.com/premium-photo/big-shawarma-kebab-fried-fire-street-food-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-3d-illustration_86390-9693.jpg"
                    title="Bawse Shawarma "
                    description="Burgers, American, Fast Food"
                    rating={4.7}
                    genre="Snacks"
                    address="Night Market"
                    dishes={[]}
                    long={-73.9876}
                    lat={40.7661}

                />

            </ScrollView>
        </View>
    )
}

export default FeaturedRow