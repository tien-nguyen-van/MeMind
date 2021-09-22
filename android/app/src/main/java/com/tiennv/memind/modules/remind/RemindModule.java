package com.tiennv.memind.modules.remind;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.tiennv.memind.modules.remind.services.RemindService;

public class RemindModule extends ReactContextBaseJavaModule {
  ReactApplicationContext reactContext;

  public RemindModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @NonNull
  @Override
  public String getName() {
    return "RemindModule";
  }

  @ReactMethod
  public void checkHeal(Promise promise) {
    promise.resolve("React native module " + this.getName() + " working ok!!!!");
  }

  @ReactMethod
  public void setRemind(Promise promise) {
    try {
      RemindService.registerJob(reactContext);
    } catch (Exception e) {
      Log.e(RemindManager.TAG, e.toString());
    }
    promise.resolve("Set remind success");
  }
}
