package com.memind.modules.alarm;

import android.app.Activity;
import android.content.Intent;
import android.provider.AlarmClock;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.jetbrains.annotations.NotNull;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class AlarmClockModule extends ReactContextBaseJavaModule {
  public AlarmClockModule(@NotNull ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @NotNull
  public String getName() {
    return "AlarmClock";
  }

  @ReactMethod
  public final void createAlarm(@NotNull String isoDate, @NotNull String name) {
    try {
      TimeZone tz = TimeZone.getTimeZone("UTC");
      DateFormat df1 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
      df1.setTimeZone(tz);
      Date date = df1.parse(isoDate);
      Intent i = new Intent(AlarmClock.ACTION_SET_ALARM);
      i.putExtra(AlarmClock.EXTRA_SKIP_UI, true);
      i.putExtra(AlarmClock.EXTRA_MESSAGE, name);
      i.putExtra(AlarmClock.EXTRA_HOUR, date.getHours());
      i.putExtra(AlarmClock.EXTRA_MINUTES, date.getMinutes());
      Activity var8 = this.getCurrentActivity();
      if (var8 != null) {
        var8.startActivity(i);
      }
    } catch (Exception var7) {
      var7.printStackTrace();
      Log.e("[RNAlarmClock]", "Error creating reminder");
      return;
    }

    Log.i("[RNAlarmClock]", "Reminder created");
  }
}
