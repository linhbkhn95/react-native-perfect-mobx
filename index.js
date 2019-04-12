/**
 * @format
 */

import { AppRegistry, YellowBox } from "react-native";
import App from './src/App';
import { name as appName } from "./app.json";
YellowBox.ignoreWarnings([
  // 'Warning: componentWillMount is deprecated',
  // 'Warning: isMounted',
  "Warning: isMounted(...) is deprecated",
  "Class RCTCxxModule",
  "Module RCTImageLoader"
]);
AppRegistry.registerComponent(appName, () => App);
