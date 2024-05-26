import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../screens/Feed';
import Article from '../screens/Article';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {

  const navigation = useNavigation();

  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;