import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export function Nome(){
    return(
        
        <SafeAreaView>
            <View>
                <Text>
                    Informe Seu Nome
                </Text>
            </View>
        </SafeAreaView>
    )
}