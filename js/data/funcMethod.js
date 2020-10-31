import data from '../data/objects.js'   
console.log(data)

const myData = data.reduce((acc, el) => {
    const tags = el.tags.split(', ')
    acc.push(...tags)
    return acc
}, [])
// console.log(myData)
const mapData = data.map((elem) => elem.pageURL)
// console.log(mapData)
const findData1 = data.find((lm) => lm.tags.split(', ').includes('sky')
)
console.log(findData1)

const filterData2 = data.filter((lm) => lm.id)
// console.log(filterData2)

const myFunc = () => console.log('myFunc');