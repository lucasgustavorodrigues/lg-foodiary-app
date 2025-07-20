import { View } from "react-native";
import { HomeHeader } from "../../components/home-header";
import { MealsList } from "../../components/meals-list";
import { CreateMealBottomBar } from "../../components/create-meal-bottom-bar";

export default function Page() {
  return (
    <View className="flex-1 bg-white">
      <HomeHeader />
      <MealsList />

      <CreateMealBottomBar />
    </View>
  )
}