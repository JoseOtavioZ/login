import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Footer(props){
    return(
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{props.testee}</Text>
            </TouchableOpacity>
        </View>
    )
}