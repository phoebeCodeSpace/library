/**
 * @description 比较两个数组之间的差异
 */
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
/**
 * @description 比较两个数组之间的相同点
 */
const similarity = (arr, values) => arr.filter(v => values.includes(v));
/**
 * @description 扁平化数组
 */
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
/**
 * @description 获取数组中最大值
 */
const arrayMax = arr => Math.max(...arr);
/**
 * @description 获取数组中最小值
 */
const arrayMin = arr => Math.min(...arr);

const arrayFn = {
  difference, similarity,
  flatten,
  arrayMax, arrayMin
}
export default arrayFn;