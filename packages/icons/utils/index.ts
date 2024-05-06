/**
 * The type is custom generated during the build process,
 * so set the type inside this module to 'any'.
 */

const VAR_UI_ICON_ID = '__var_ui__icon';

export function isVarUIIcon(arg: any) {
  return typeof arg === 'function' && arg[VAR_UI_ICON_ID] === true;
}

export function createVarUIIcon(source: any) {
  const clone = source;
  clone[VAR_UI_ICON_ID] = true;
  return clone;
}
