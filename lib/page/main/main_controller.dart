import 'package:get/get.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MainController extends GetxController {
  late final WebViewController wController;
  onWebViewCreated(WebViewController webViewController) {
    wController = webViewController;
    webViewController.loadFlutterAsset("assets/web/chapter.html");
  }

  onPageFinished(String url) {
    wController.runJavascript("""
document.
""");
  }

  // JavascriptChannel jsBridgeJavascriptChannel() {
  //   return JavascriptChannel(
  //       name: 'JSBridge',
  //       onMessageReceived: (JavascriptMessage message) {
  //         print(message.message);
  //         onTap();
  //       });
  // }

  // onTap() {
  //   wController.scrollBy(393, 0);
  // }

  onFabTap() {
    wController.scrollBy(1080, 0);
  }
}
