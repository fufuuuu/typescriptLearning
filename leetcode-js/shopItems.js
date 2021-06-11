// function convert(itemList) {
//   return itemList.reduce((acc, cur) => {
//       let tmp = acc.find(goods => goods.category === cur.category);
//       tmp ? tmp.items.push(cur) : acc.push({category:cur.category, items:[{...cur}]})
//       console.log(acc)
//       return acc;
//   },[])
//   .sort((a, b) => b.items.length - a.items.length)
//   .map(e => {
//       return e.items.sort((a, b) => b.saleCount - a.saleCount)
//   })
// }

function convert(itemList) {
  let ans = itemList.reduce((acc, cur) => {
    let tmp = acc.find(goods => goods.category ===cur.category)
    tmp ? tmp.items.push(cur) : acc.push({category: cur.category, items: [{...cur}]})
    return acc
  }, [])
  .sort((a, b) =>b.items.length - a.items.length)
  .map(e => {
    return e.items.sort((a,b) => b.saleCount - a.saleCount)
  })
  for(let i = 0; i < ans.length;i++){
    let tmp = {category: ans[i][0].category, items: ans[i]}
    ans[i] = []
    ans[i].push(tmp)
  }
  for(let i = 0; i < ans.length;i++){
    for(let j = 0; j < ans[i].length; j++){
      console.log(ans[i][j])
    }
  }
}

const itemList = [
  {id: 1 ,name: 'item1', category: '家居百货', saleCount: 20},
  {id: 2 ,name: 'item2', category: '个护美妆', saleCount: 35},
  {id: 3 ,name: 'item3', category: '休闲零食', saleCount: 2},
  {id: 4 ,name: 'item4', category: '个护美妆', saleCount: 18},
  {id: 5 ,name: 'item5', category: '个护美妆', saleCount: 29},
  {id: 6 ,name: 'item6', category: '休闲零食', saleCount: 40},
  {id: 7 ,name: 'item7', category: '休闲零食', saleCount: 15},
  {id: 8 ,name: 'item8', category: '休闲零食', saleCount: 24},
  {id: 9 ,name: 'item9', category: '家居百货', saleCount: 21},
  {id: 10 ,name: 'item10', category: '潮流衣物', saleCount: 57},
  {id: 11 ,name: 'item11', category: '家居百货', saleCount: 12},
]
convert(itemList)
// console.log(convert(itemList))

