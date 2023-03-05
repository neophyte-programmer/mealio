import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {
    // Access the navigation object using navigation hook
    const navigation = useNavigation()

    // As soon as screen mounts, modify the default header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5 space-y-2">
            {/* Header */}
            <View className="flex-row px-4 items-center gap-2 py-2">
                <Image
                    source={require('../assets/rider.avif')}
                    className="h-10 w-10 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-semibold text-gray-400 text-xs ">Mealio</Text>
                    <Text className="font-bold text-lg">
                        Current Location
                        <ChevronDownIcon size={17} color={"#FF3548"} />

                    </Text>

                </View>

                <View className="border-primary border rounded-full p-1">

                    <UserIcon size={22} color={"#FF3548"} />
                </View>
            </View>
            {/* Search */}
            <View className="px-4 flex-row items-center space-x-4">
                <View className="flex-row flex-1 bg-gray-100  py-2 px-2 space-x-2 rounded-lg ">
                    <MagnifyingGlassIcon size={22} color={"#FF3548"} />
                    <TextInput placeholder='Restaurants and cuisines' className="placeholder:text-gray-500" keyboardType='default' />
                </View>
                <View>
                    <AdjustmentsHorizontalIcon size={27} color={"#FF3548"} />

                </View>
            </View>
            <ScrollView className="px-4 bg-gray-100">
                <Categories />
                {/* Featured Rows */}
                <FeaturedRow title="Must Try" description="Top rated restaurants and cuisines" id='123' />
                <FeaturedRow title="Discount on Menu" description="Everyone's been enjoying these juicy discounts" id='456' />
                <FeaturedRow title="Offers near you" description="Why not support your local restaurant today!" id='789' />


            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen