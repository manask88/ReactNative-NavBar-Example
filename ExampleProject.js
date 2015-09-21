var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var TestView = require('./TestView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  Component
} = React;



class ExampleProject extends Component{

  renderScene(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });


      console.log('navver available')
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
          navigationBar: <NavigationBar backgroundStyle={styles.navBarContainer} customPrev={<Text style={styles.navBarTitleNext}>Prev</Text>} customNext={<Text style={styles.navBarTitleNext} >Next</Text>} title="Initial View" nextTitle="dd" buttonsColor="white"  onNext={ console.log('d')}
            onNext={ console.log('next')}
          />
        }}
      />
    );
  }
};
const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;
var styles = StyleSheet.create({
  navBarContainer: {
   backgroundColor: 'blue',

 },
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBarTitleNext: {
    textAlign: 'right',
    color: '#373e4d',
    fontWeight: '500',
    left: 0,
    right: 0,
    bottom: -30,
},
});


module.exports=ExampleProject
