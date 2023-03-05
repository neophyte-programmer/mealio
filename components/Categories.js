import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
          paddingHorizontal: 4,
          paddingVertical: 10,
      }} >
          <CategoryCard imageUrl='https://i.pinimg.com/736x/f7/53/1d/f7531d172b896d272a13096d553b9655--dark-mornings.jpg' title="Breakfast" />
          <CategoryCard imageUrl='https://thumbs.dreamstime.com/b/west-african-entree-jollof-rice-overhead-view-dish-chicken-shito-sauce-boiled-egg-197234742.jpg' title="Lunch" />
          <CategoryCard imageUrl='https://img.freepik.com/premium-photo/asian-noodles-with-prawns-vegetables-served-pan-dark-background_1220-5662.jpg' title="Dinner" />
          <CategoryCard imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLzsiYoDtOd9LJeTeyuQNGyEtdBkUg4pE3w&usqp=CAU' title="Snacks" />
          <CategoryCard imageUrl='https://media.istockphoto.com/id/1205456022/photo/fresh-tasty-meat-free-burger.jpg?s=612x612&w=0&k=20&c=vTPthbRTnqN_mswCHnK9j3WYBPlBpDiJxirkHXOH9qI=' title="Cravings" />
          <CategoryCard imageUrl='https://media.istockphoto.com/id/1073914950/photo/three-refreshing-mimosa-cocktails.jpg?s=612x612&w=0&k=20&c=Jt0BWnGxlEQUZFA82hecUv_Eku5SVHaGL3BgzEoYJrI=' title="Drinks" />
    </ScrollView>
  )
}

export default Categories