import 'package:epub_d/page/main/main_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
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
        // onTap: controller.onTap,
        child: WebView(
          onWebViewCreated: controller.onWebViewCreated,
          onPageFinished: controller.onPageFinished,
          javascriptMode: JavascriptMode.unrestricted,
          // javascriptChannels: <JavascriptChannel>{
          //   controller.jsBridgeJavascriptChannel()
          // },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: controller.onFabTap,
        child: const Icon(Icons.arrow_downward_sharp),
      ),
    );
  }
}
