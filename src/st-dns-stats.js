import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const domainsObj = {};
  const domainsArr = [];

  domains.forEach((el) => {
    let domainPart = '';
    const newStr = el.split('.').reverse();
    for (let i = 0; i < newStr.length; i++) {
      domainPart += `.${newStr[i]}`;
      domainsArr.push(domainPart);
    }
  });

  domainsArr.forEach((el) => {
    if (domainsObj[el] === undefined) {
      domainsObj[el] = 1;
    } else {
      domainsObj[el] += 1;
    }
  });

  return domainsObj;
}
