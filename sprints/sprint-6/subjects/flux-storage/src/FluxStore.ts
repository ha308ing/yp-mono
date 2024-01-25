type TAction = {
  name: string;
  payload?: any;
};

class FluxStore {
  private data: TStore = {
    language: "RU",
    currency: "RUB",
  };

  listeners: Array<(arg: TStore) => void> = [];

  constructor() {}

  dispatch(action: TAction) {
    this.processAction(action);
  }

  // public makeAction(name: string) {
  //   return (payload: unknown) => {
  //     console.log({ [name]: payload });
  //     let storeProperty = "";
  //     switch (name) {
  //       case "CHANGE_LANGUAGE": {
  //         storeProperty = "language";
  //         break;
  //       }
  //       case "CHANGE_CURRENCY": {
  //         storeProperty = "currency";
  //         break;
  //       }
  //     }
  //     this.data = { ...this.data, [storeProperty]: payload };
  //     this.emitUpdates();
  //   };
  // }

  // public makeChangeLanguageAction(newLanguage: string) {
  //   this.makeAction("CHANGE_LANGUAGE")(newLanguage);
  // }
  // public makeChangeCurrencyAction(newCurrency: string) {
  //   this.makeAction("CHANGE_LANGUAGE")(newCurrency);
  // }

  private processAction({ name, payload }: TAction): void {
    switch (name) {
      case "CHANGE_LANGUAGE": {
        this.data = { ...this.data, language: payload };
        break;
      }
      case "CHANGE_CURRENCY": {
        this.data = { ...this.data, currency: payload };
        break;
      }
    }
    this.emitUpdates();
  }

  private emitUpdates(): void {
    this.listeners.forEach(l => {
      l(this.data);
    });
  }

  // create hook
  // method for presentation to subscribe to listener
  // returns unsubscribe method
  subscribe(listener: (arg: TStore) => void) {
    this.listeners.push(listener);

    listener(this.data);

    return () => {
      this.listeners = this.listeners.filter(l => l != listener);
    };
  }
}

export type TStore = {
  currency: string;
  language: string;
};

export const store = new FluxStore();
