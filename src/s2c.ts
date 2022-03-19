import camelcase from 'camelcase';
import { isPlainObject, isString } from 'lodash-es';

// 蛇形转驼峰
export function s2c(data: any): any {
  if (isString(data)) {
    return camelcase(data);
  }

  if (Array.isArray(data)) {
    return data.map((ele) => s2c(ele));
  }

  if (isPlainObject(data)) {
    return Object.entries(data).reduce(
      (result, [key, value]) => ({
        ...result,
        [camelcase(key)]: s2c(value),
      }),
      {}
    );
  }

  // if data is not an Array or PlainObject, such as Function、Date、FormData、File and so on.
  return data;
}
