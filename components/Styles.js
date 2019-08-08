import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //  backgroundImage: {
  //    flex: 1,
  //    width: '100%',
  //    height: '100%',
  //    resizeMode: 'cover'
  //  }, 
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#024059"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: "#ffff",
      marginBottom: 5
    }
  });

  export default styles;