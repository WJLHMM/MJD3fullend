const m = [
	{
 username: "guest", sku: "100042382794", number: 1, checked: false,
},
	{
 username: "guest", sku: "1000409635145", number: 1, checked: false,
},
	{
 username: "guest", sku: "1000347782119", number: 1, checked: false,
},
]
// const a = m.filter(item => item==1)
// const b = m.filter((item) => n.filter((item1) => item1 == item)[0])
const b = m.every((item) => item.checked === true)
// const b = m.map((item) => {
//     item.checked = false
//     return item
// })
console.log(b)
