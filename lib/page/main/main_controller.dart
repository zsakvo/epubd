import 'package:epub_d/log.dart';
import 'package:epub_d/page/main/js_bridge.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:get/get.dart';
import 'package:loggy/loggy.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MainController extends GetxController {
  late InAppWebViewController wController;
  int page = 0;
  final x = Get.width.obs;
  double tapDownPos = 0.0;
  double tapUpPos = 0.0;
  int pageWidth = 0;
  final distance = 40;
  final webViewKey = GlobalKey();
  final gestureListener = true.obs;
  late double mDensityFixedWidth = Get.pixelRatio;
  late double mDensityFixedHeight = Get.pixelRatio;

  onWebViewCreated(InAppWebViewController webViewController) {
    wController = webViewController;
    initJsBridge(webViewController, setPageWidth, setObserveSwipe);
  }

  setPageWidth(params) {
    pageWidth = ((GetPlatform.isIOS ? 1 : Get.pixelRatio) * params[0]).round();
    final double notifyWidth = params[0] * 1.0;
    final double notifyHeight = params[1] * 1.0;
    final double mContentScaleX =
        notifyWidth / webViewKey.currentContext!.size!.width;
    final double mContentScaleY =
        notifyHeight / webViewKey.currentContext!.size!.height;
    mDensityFixedWidth = mContentScaleX * Get.pixelRatio;
    mDensityFixedHeight = mContentScaleY * Get.pixelRatio;
  }

  setObserveSwipe(bool b) {
    gestureListener.value = b;
  }

  onWindowFocus(InAppWebViewController webViewController) {}

  onPointerMove(PointerMoveEvent event) {
    if (gestureListener.value) {
      wController.scrollBy(
          x: (-event.delta.dx * (GetPlatform.isIOS ? 1 : Get.pixelRatio))
              .round(),
          y: 0);
    }
  }

  onPointerDown(PointerDownEvent event) {
    tapDownPos = event.position.dx;
  }

  onPointerUp(PointerUpEvent event) {
    tapUpPos = event.position.dx;
    double res = tapUpPos - tapDownPos;
    double resAbs = res.abs();
    if (resAbs > distance) {
      res < 0 ? page++ : page--;
    }
    wController.scrollTo(x: (pageWidth * page).round(), y: 0, animated: true);
  }
}
