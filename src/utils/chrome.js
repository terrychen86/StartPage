// @flow

declare var chrome: any;

export type ChromeStorage = {|
  +get: string => Promise<string>,
  +set: ({ [string]: string }) => Promise<void>,
|};

const chromeStorageGet = (key: string): Promise<string> =>
  new Promise<string>(resolve => {
    chrome.storage.sync.get(key, (res: string) => {
      resolve(res);
    });
  });

const chromeStorageSet = (data: { [string]: string }): Promise<void> =>
  new Promise<void>(resolve => {
    chrome.storage.sync.set(data, () => {
      resolve();
    });
  });

export const chromeStorage: ChromeStorage = {
  get: chromeStorageGet,
  set: chromeStorageSet,
};
