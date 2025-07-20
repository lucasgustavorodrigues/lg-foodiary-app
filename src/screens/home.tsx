import { View } from "react-native";
import { HomeHeader } from "../components/home-header";
import { MealsList } from "../components/meals-list";
import { CreateMealBottomBar } from "../components/create-meal-bottom-bar";

export function Home() {
    return (
        <View className="flex-1">
            <HomeHeader />
            <MealsList />

            <CreateMealBottomBar />
        </View>
    )
}