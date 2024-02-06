import axios from "axios";
import { saveAppSetting } from "./app-setting";
type ContentMapItem = {
  domain: string;
  ip: string;
  ip2: string;
};
const urlMap: {
  service: string[];
  content: ContentMapItem[];
} = {
  service: [],
  content: [],
};
type urlMapItem = {
  service: string[];
  content: ContentMapItem[];
};


let map = {
  apiplayer_map: {},
  content_map: {},
};

const contentApi = async (query: string) => {
  try {
    const response = await fetch(`/${query}`);
    
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`-failure-${response.status}`);
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

class PotentialFirewallError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PotentialFirewallError";
  }
}


export {contentApi };
