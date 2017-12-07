/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export const COMPLETE_TODO = 'COMPLETE_TODO';
export type COMPLETE_TODO = typeof COMPLETE_TODO;

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

/*
 * 其它的常量
 */

function genMap<K extends string>(...keys: K[]): { [key in K]: key } {
  /* tslint:disable:no-any */
  let mapping: any = {};
  keys.forEach(k => {
    mapping[k] = k;
  });
  return mapping;
}
export const VISIBILITYFILTERS = genMap(
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
);
export type VISIBILITYFILTERS = typeof VISIBILITYFILTERS;
