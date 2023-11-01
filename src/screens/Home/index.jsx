import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Footer from "../../components/Footer";

export function Home(){
    return(
        
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    UNIPAR
                </Text>
                <Footer testee="Iniciar"></Footer> 
            </View>
            
        </SafeAreaView>
    )
}