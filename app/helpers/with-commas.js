import { helper } from '@ember/component/helper';

export function withCommas(params) {
  // console.log(params);
  return params[0].toLocaleString();
}

export default helper(withCommas);
