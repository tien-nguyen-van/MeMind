package com.tiennv.memind.modules.remind.services;

import android.content.Context;

import androidx.work.ExistingWorkPolicy;
import androidx.work.OneTimeWorkRequest;
import androidx.work.WorkManager;
import androidx.work.WorkRequest;

import com.tiennv.memind.modules.remind.RemindManager;

import java.util.concurrent.TimeUnit;

public class RemindService {
  public static void registerJob(Context context) {
    WorkRequest remindWorkRequest = new OneTimeWorkRequest.Builder(RemindWorker.class)
            .setInitialDelay(30 * 1000, TimeUnit.MILLISECONDS).build();
    WorkManager.getInstance(context)
            .beginUniqueWork(RemindManager.WORKER_NAME_PREFIX, ExistingWorkPolicy.REPLACE, (OneTimeWorkRequest) remindWorkRequest)
            .enqueue();
  }
}
