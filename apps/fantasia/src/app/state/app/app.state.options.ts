import { StoreOptions } from '@ngxs/store/src/symbols';

import { StateAppModel } from './app.state.model';

export const StateAppOptions: StoreOptions<StateAppModel> = {
  name: 'app',

  defaults: {
    home: true,
    apps: {},
    loading: false,
    stateName: 'init',
    mediaChanges: []
  }
};
