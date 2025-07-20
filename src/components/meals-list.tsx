import { FlatList, Text, View } from "react-native";
import { MealCard } from "./meal-card";
import { DateSwitcher } from "./date-switcher";
import { DailyStats } from "./daily-stats";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const meals = [
    {
        id: String(Math.random()),
        name: 'Café da manhã'
    },
    {
        id: String(Math.random()),
        name: 'Almoço'
    },
    {
        id: String(Math.random()),
        name: 'Lanche'
    },
    {
        id: String(Math.random()),
        name: 'Janta'
    },
    {
        id: String(Math.random()),
        name: 'Lanche noite'
    }
]

function MealsListHeader() {
    return (
        <View>
            <DateSwitcher />
            <View className="mt-2">
                <DailyStats
                    calories={{
                        current: 500,
                        goal: 2500
                    }}
                    proteins={{
                        current: 50,
                        goal: 170
                    }}
                    carbohydrates={{
                        current: 120,
                        goal: 350
                    }}
                    fats={{
                        current: 12,
                        goal: 67
                    }}
                />
            </View>
            <View className="h-px bg-gray-200 mt-7" />

            <Text className="text-black-700 text-base m-5 font-sans-medium tracking-[1.28px]">
                REFEIÇÕES
            </Text>
        </View>
    )
}

function Separator() {
    return (
        <View className="h-8" />
    )
}

export function MealsList() {
    const { bottom } = useSafeAreaInsets();

    return (
        <FlatList
            contentContainerStyle={{ paddingBottom: 80 + bottom + 16 }}
            data={meals}
            keyExtractor={meal => meal.id}
            ListHeaderComponent={MealsListHeader}
            ItemSeparatorComponent={Separator}
            renderItem={({ item: meal }) => (
                <View className="mx-5">
                    <MealCard
                        id={meal.id}
                        name={meal.name}
                    />
                </View>
            )}
        />
    )
}