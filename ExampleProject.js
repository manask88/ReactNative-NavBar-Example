var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var TestView = require('./TestView');

var {
  StyleSheet,
  Text,
  Navigator,
  View,
  Component,
  TouchableOpacity
} = React;



/**
 * Custom `Prev` button component
 */
class CustomPrev extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => console.log('prev') }>
        <Text style={styles.customLeftButton}>Back</Text>
      </TouchableOpacity>
    );
  }
}

/**
 * Custom `Next` button component
 */
class CustomNext extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => console.log('next') }>
        <Text style={styles.customRightButton}>Next</Text>

      </TouchableOpacity>
    );
  }
}

class ExampleProject extends Component{

  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });

    }

    return (
      <View style={styles.container}>
        {navBar}
        <TestView navigator={navigator} route={route} />
      </View>
    );
  }

  render() {

    return (
      <Navigator
        style={styles.container}
        renderScene={this.renderScene}
        initialRoute={{
          component: <Text>{'initial'}</Text>,
          navigationBar: <NavigationBar
                          backgroundStyle={styles.navBarContainer}
                          title="Initial View"
                          customPrev={<CustomPrev/>}
                          customNext={<CustomNext/>}

          />
        }}
      />
    );
  }
};

var styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
  },
  customLeftButton: {
    left: 10,
    top: 30,
  },
  customRightButton: {
    right: 10,
    top: 30,
  },
});


module.exports=ExampleProject
