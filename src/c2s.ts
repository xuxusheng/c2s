import { isPlainObject, isString } from 'lodash-es';
import decamelize from 'decamelize';

// 驼峰转蛇形
export function c2s(data: any): any {
  if (isString(data)) {
    return decamelize(data);
  }

  if (Array.isArray(data)) {
    return data.map((ele) => c2s(ele));
  }

  if (isPlainObject(data)) {
    return Object.entries(data).reduce(
      (result, [key, value]) => ({
        ...result,
        [decamelize(key)]: c2s(value),
      }),
      {}
    );
  }

  // if data is not an Array or PlainObject, such as Function、Date、FormData、File and so on.
  return data;
}
