import {View, Text, StyleSheet} from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.textView}>
           <Text>{props.goal}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    textView: {
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});