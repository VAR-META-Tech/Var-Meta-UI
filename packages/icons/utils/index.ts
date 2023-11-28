/**
 * The type is custom generated during the build process,
 * so set the type inside this module to 'any'.
 */

const HASHGRAPH_ICON_ID = '__hashgraph__icon';

export function isHashgraphIcon(arg: any) {
  return typeof arg === 'function' && arg[HASHGRAPH_ICON_ID] === true;
}

export function createHashgraphIcon(source: any) {
  const clone = source;
  clone[HASHGRAPH_ICON_ID] = true;
  return clone;
}
