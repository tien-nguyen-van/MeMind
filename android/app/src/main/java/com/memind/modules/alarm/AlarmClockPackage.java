package com.memind.modules.alarm;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AlarmClockPackage implements ReactPackage {
  @NotNull
  public List createNativeModules(@NotNull ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new AlarmClockModule(reactContext));
    return modules;
  }

  @NotNull
  public List createViewManagers(@NotNull ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
