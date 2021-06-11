// 记录一道阿里笔试题，模版渲染

const renderTpl = (template, templateData) => {
  const getTplRegExp = /\<\% (.+?) \%\>/g;
  return template.replace(getTplRegExp, (str, $1) => {
    // safeGet 可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined
    return $1
      .replace(/\[([^\[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], templateData);
  });
};
let tpl = "你好，我们公司是<% company.name %>，我们部门是<% bu %>";
let tplData = {
  // company: {
  //   // name: "阿里巴巴",
  // },
  name: "alibaba",
  bu: "淘系技术部阿里拍卖",
};
const str = renderTpl(tpl, tplData);
console.log(str); // 最终输出结果为：你好，我们公司是阿里巴巴，我们部门是淘系技术部阿里拍卖。

let tpl1 = "今日营业<% count %>万";
let tplData1 = {
  count: 100,
};
const str1 = renderTpl(tpl1, tplData1);
console.log(str1); // 最终输出结果为：今日营业100万