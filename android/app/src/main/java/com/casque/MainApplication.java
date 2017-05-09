package com.casque;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import com.rhaker.reactnativeselectcontacts.ReactNativeSelectContacts; // <------ add import
import com.lwhiteley.reactnativecontactpicker.RNContactPicker;
//import com.someone.sendsms.SendSMSPackage; // <--- add here!
//import com.someone.sendsms.SendSMSPackage; // <--- add here!

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new MapsPackage(),
             new ReactNativeSelectContacts(),
             new RNContactPicker()
             //new SendSMSPackage()     // <--- add here!
              //new SendSMSPackage()     // <--- add here!

      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
