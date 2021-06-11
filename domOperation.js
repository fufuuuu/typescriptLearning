function convert(template, templateData) {
  const getTplRegExp = /\%\{ (.+?) \}/g
  console.log()
  return template.replace(getTplRegExp, (str, $1) =>{
    console.log($1)
    return $1
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter((t)=> t != '')
    .reduce((prev,cur) => prev && prev[cur] ,templateData)
  })
}

let tpl = "你好，我们公司是%{ company.name }，我们部门是%{ bu }";
let tplData = {
  company: {
    name: "阿里巴巴",
  },
  // name: "alibaba",
  bu: "淘系技术部阿里拍卖",
};
console.log(convert(tpl, tplData))