var React = require('react-native');
var NavigationBar = require('react-native-navbar');

var {
  StyleSheet,
  Text,
  View,
  Component
} = React;



class TestView extends Component{


  render() {

    return (
      <View style={styles.container}>
        <Text>testView</Text>
      </View>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports=TestView
