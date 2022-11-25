import 'package:flutter/gestures.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:get/get.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MainController extends GetxController {
  late InAppWebViewController wController;
  int page = 0;
  final x = Get.width.obs;
  double tapDownPos = 0.0;
  double tapUpPos = 0.0;
  late int pageWidth;
  onWebViewCreated(InAppWebViewController webViewController) {
    wController = webViewController;
    webViewController.addJavaScriptHandler(
        handlerName: "NotifySize",
        callback: (params) {
          print("notifySize");
          print(params.toString());
          pageWidth = (Get.pixelRatio * params[0]).round();
        });
//     webViewController.evaluateJavascript(source: """
// LithiumApp.notifySize = NotifySize
// """);
    // webViewController.loadFlutterAsset("assets/web/chapter.html");
  }

  onPageFinished(String url) {
//     wController.runJavascript("""

// """);
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
    // print(Get.width);
    // print(Get.pixelRatio);
    page++;
    // print((Get.width * Get.pixelRatio * page).round());
    wController.scrollTo(x: (pageWidth * page).round(), y: 0, animated: true);
//     wController.runJavascript("""
// document.body.sty
// """);
  }

  onContentSizeChanged(
      InAppWebViewController controller, Size newSize, Size oldSize) {
    print(oldSize.toString());
    print(newSize.toString());
    x.value = newSize.width;
  }

  onHorizontalDragUpdate(DragUpdateDetails details) {
    // print(details.globalPosition);
    tapUpPos = details.globalPosition.dx;
    wController.scrollBy(x: (-details.delta.dx * Get.pixelRatio).round(), y: 0);
  }

  onTapDown(TapDownDetails details) {
    print(details.toString());
    print(details.globalPosition);
    tapDownPos = details.globalPosition.dx;
  }

  onTapUp(TapUpDetails details) {
    print(details.toString());
  }

  onTapCancel() {
    print("cancel");
  }

  onHorizontalDragEnd(DragEndDetails details) {
    // print(details.primaryVelocity);
    double res = tapUpPos - tapDownPos;
    print("onHorizontalDragEnd");
    print(res);
    if (res < 0) {
      page++;
    } else {
      page--;
    }
    wController.scrollTo(x: (pageWidth * page).round(), y: 0, animated: true);
  }
}
