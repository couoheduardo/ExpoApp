const commonConfig = {
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra":{
      "URL":"https://rickandmortyapi.com"
    }
 
};

const ios = {
    "supportsTablet": true,
  

};


const android = {
    "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
    },
};
module.exports = () => {
    if (process.env.APP_ENV === "ios") {
        return {
            ...commonConfig,
            "name": "myapp",
            "slug": "myapp",
            "version": "1.0.0",
            "ios": ios
        };
    } else if (process.env.APP_ENV === "android") {
        return {
            ...commonConfig,
            "name": "myapp",
            "slug": "myapp",
            "version": "1.0.0",
            "android": android
        };
    } else if (process.env.APP_ENV === "expo") {
        return {
            ...commonConfig,
            "name": "myapp",
            "slug": "myapp-dev",
            "version": "1.0.0",
            "ios": ios,
            "android": android
        };
    }
};