export namespace SettingsActions {

  export enum Type {
    LOAD_SETTINGS = 'LOAD_SETTINGS',
    TOGGLE_SETTING = 'TOGGLE_SETTING',
    SET_SETTING = 'SET_SETTING'
  }

  export const loadSettings = () => ({ type: Type.LOAD_SETTINGS })
  export const toggleSetting = (setting: string) => ({ type: Type.TOGGLE_SETTING, setting })
  export const setSetting = (setting: string, value: any) => ({ type: Type.SET_SETTING, setting, value })

}
