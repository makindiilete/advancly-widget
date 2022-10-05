import WebView from "react-native-webview";
import { HTML } from "./widgetsource";

export default function App() {
  return <WebView source={{ html: HTML }} style={{ marginTop: 40 }} />;
}
