// @flow

declare var chrome: any;

export type DataStore = {|
  +get: string => Promise<string>,
  +set: ({ [string]: string }) => Promise<void>,
|};

const get = (key: string): Promise<string> =>
  new Promise<string>(resolve => {
    const data = sessionStorage.getItem(key);
    if (data == null) {
      chrome.storage.sync.get(key, (res: string) => {
        sessionStorage.setItem(key, res);
        resolve(res);
      });
    } else {
      resolve(data);
    }
  });

const set = (data: { [string]: string }): Promise<void> =>
  new Promise<void>(resolve => {
    Object.keys(data).forEach((key: string) => {
      sessionStorage.setItem(key, data[key]);
    });

    chrome.storage.sync.set(data);
    resolve();
  });

export const dataStore: DataStore = {
  get,
  set,
};
