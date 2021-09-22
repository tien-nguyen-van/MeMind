package com.tiennv.memind.modules.remind.services;

import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.work.Worker;
import androidx.work.WorkerParameters;

import com.tiennv.memind.modules.remind.RemindManager;

public class RemindWorker extends Worker {
  public RemindWorker(@NonNull Context context, @NonNull WorkerParameters workerParams) {
    super(context, workerParams);
  }

  @NonNull
  @Override
  public Result doWork() {
    Log.d(RemindManager.TAG, "Running into worker");
    for(int i=0;i<10;i++) {
      try {
        Thread.sleep(15*1000);
        Log.i(RemindManager.TAG, "Running with idx: " + i);
      } catch (Exception e) {
        Log.e(RemindManager.TAG, e.toString());
        return Result.failure();
      }
    }
    return Result.success();
  }
}
