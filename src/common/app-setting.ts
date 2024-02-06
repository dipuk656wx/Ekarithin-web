import packageJson from "../../package.json";
const version = packageJson.version;

type AppSettingKey =
  | "runAtOsStartup"
  | "soundEnabled"
  | "endpoints"
  | "uiLanguage"
  | "subLanguage"
  | "downloadDirectory"
  | "urlMap"
  | "torrentInfo"
  | "torrentData"
  | "port"
  | "pieceStates"
  | "osLang"
  | "categorySelected"
  | "listingSelected"
  | "typeSelected"
  | "favouriteList";

export type EndpointEntry = {
  domain: string;
  isActive: boolean;
};
type SettingObject = {
  runAtOsStartup: string;
  soundEnabled: string;
  endpoints: EndpointEntry[];
  uiLanguage: string;
  subLanguage: string;
  downloadDirectory: string;
  urlMap : Object;
  favouriteList: Array<Array<any>>;
  torrentInfo: Array<object>;
  torrentData: Array<object>;
  pieceStates: Array<number>;
  port: string;
  osLang: string;
  categorySelected: string;
  typeSelected: string;
  listingSelected: string;
};

const cachedValues: SettingObject = {
  runAtOsStartup: "false",
  soundEnabled: "true",
  endpoints: [],
  uiLanguage: "en",
  subLanguage: "en",
  downloadDirectory: "",
  urlMap: {},
  favouriteList: [],
  torrentInfo: [],
  torrentData: [],
  pieceStates: [],
  port: "",
  osLang:"",
  categorySelected: "",
  typeSelected: "",
  listingSelected: "",
};

const getAppSetting = (key: AppSettingKey) => {
  try {
    let storedValue = localStorage.getItem(`${key}-${version}`);
  
    if (storedValue) {
      if (key === "endpoints") {
        const parsedValue: EndpointEntry[] = JSON.parse(storedValue);
        if (parsedValue) {
          cachedValues[key] = parsedValue;
        }
      }else if(key==="urlMap" || key == "favouriteList" || key == "torrentInfo" || key =="torrentData" || key=="pieceStates"){
        const parsedValue = JSON.parse(storedValue);
        if (parsedValue) {
          cachedValues[key] = parsedValue;
        }
      } else {
        cachedValues[key] = storedValue;
      }
    }
  } catch (error) {
    // parse-key-failed
  }
  return cachedValues[key];
};

const saveAppSetting = (key: AppSettingKey, newValue: any) => {
  cachedValues[key] = newValue;
  let serializedValue = newValue;

  if (key === "endpoints" || key == "urlMap" || key == "favouriteList" || key == "torrentInfo" || key == "torrentData" || key=="pieceStates") {
    serializedValue = JSON.stringify(newValue);
  }
  localStorage.setItem(`${key}-${version}`, serializedValue);
  
};

export { getAppSetting, saveAppSetting };
