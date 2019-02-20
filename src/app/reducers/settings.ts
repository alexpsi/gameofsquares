import { SettingsActions } from 'app/actions/settings';

const initialState = {
  theme: 'vapor',
  music: true,
  effects: true
}

export const settingsReducer = (state = initialState, action: any) => {
  let newSettings;
  switch (action.type) {
    case SettingsActions.Type.LOAD_SETTINGS:
      const ls = localStorage.getItem('settings');
      if (ls) {
        try {
          return JSON.parse(ls)
        } catch (e) { }
      }
      return [];

    case SettingsActions.Type.TOGGLE_SETTING:
      newSettings = {
        ...state,
        // @ts-ignore
        [action.setting]: !state[action.setting]
      }
      localStorage.setItem('settings', JSON.stringify(newSettings))
      return newSettings;

    case SettingsActions.Type.SET_SETTING:
      newSettings = {
        ...state,
        // @ts-ignore
        [action.setting]: action.value
      }
      localStorage.setItem('settings', JSON.stringify(newSettings))
      return newSettings;

    default:
      return state;
  }
}
