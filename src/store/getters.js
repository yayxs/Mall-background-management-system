export default {
  // 只传一个值
  ageFilter: (state) => state.list.length,
  // 第二个参数
  newList(state, getters) {
    console.log(state);
    console.log(getters);
    return getters.ageFilter + "";
  },
  // getter第二个参数 getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
  addNum: (state) => (payload) => {
    return state.num + payload;
  },
};
