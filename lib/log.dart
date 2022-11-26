import 'package:loggy/loggy.dart';

class DoSomeWork with UiLoggy {
  DoSomeWork() {
    loggy.debug('This is debug message');
    loggy.info('This is info message');
    loggy.warning('This is warning message');
    loggy.error('This is error message');
  }
}
