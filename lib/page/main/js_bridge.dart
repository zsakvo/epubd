import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:get/get.dart';
import 'package:loggy/loggy.dart';

void initJsBridge(
    InAppWebViewController webViewController, setPageWidth, setObserveSwipe) {
  webViewController.addJavaScriptHandler(
      handlerName: "NotifySize",
      callback: (params) {
        logInfo(Get.pixelRatio, params);
        // pageWidth = (Get.pixelRatio * params[0]).round();
        setPageWidth(params);
      });

  webViewController.addJavaScriptHandler(
      handlerName: "onSelectionCreated",
      callback: (params) {
        logInfo('onSelectionCreated', params);
        setObserveSwipe(false);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "onSelectionStarted",
      callback: (params) {
        logInfo('onSelectionStarted', params);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "onSelectionDestroyed",
      callback: (params) {
        logInfo('onSelectionDestroyed', params);
        setObserveSwipe(true);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "shouldInsertAnnotation",
      callback: (params) {
        logInfo('shouldInsertAnnotation', params);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "onSelectionStopped",
      callback: (params) {
        logInfo('onSelectionStopped', params);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "insertAnnotation",
      callback: (params) {
        logInfo('insertAnnotation', params);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "upgradeAnnotation19",
      callback: (params) {
        logInfo('upgradeAnnotation19', params);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "onAnnotationSelected",
      callback: (params) {
        logInfo('onAnnotationSelected', params);
      });
  webViewController.addJavaScriptHandler(
      handlerName: "onBoundsUpdated",
      callback: (params) {
        logInfo('onBoundsUpdated', params);
      });
}
