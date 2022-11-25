import 'package:epub_d/page/main/main_controller.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:get/get.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MainScreen extends GetView<MainController> {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Get.put(MainController());
    return Scaffold(
      appBar: AppBar(toolbarHeight: 0),
      body: GestureDetector(
        onHorizontalDragUpdate: controller.onHorizontalDragUpdate,
        onHorizontalDragEnd: controller.onHorizontalDragEnd,
        onTapDown: controller.onTapDown,
        onTapUp: controller.onTapUp,
        onTapCancel: controller.onTapCancel,
        //  (details) {
        //   controller.wController.scrollBy(x: -details.delta.dx.round(), y: 0);
        // },
        onTap: () {
          controller.wController
              .scrollBy(x: Get.width.round(), y: 0, animated: true);
        },
        child: InAppWebView(
          onWebViewCreated: controller.onWebViewCreated,
          initialFile: "assets/web/chapter.html",
          initialSettings: InAppWebViewSettings(
              pageZoom: Get.pixelRatio,
              verticalScrollBarEnabled: false,
              horizontalScrollBarEnabled: false,
              disableHorizontalScroll: true,
              disableVerticalScroll: true),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: controller.onFabTap,
        child: const Icon(Icons.arrow_downward_sharp),
      ),
    );
  }
}
