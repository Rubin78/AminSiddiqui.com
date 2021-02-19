import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);


const Mainpage = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
