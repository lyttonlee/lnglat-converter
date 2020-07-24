const converter = require('../index')

const wgs84Point = [32, 106]
console.log(`原始wgs84Point -> lat: ${wgs84Point[0]} , lng: ${wgs84Point[1]}`)

const bd09Point = converter.wgs84tobd09(wgs84Point[1], wgs84Point[0])

console.log(`转化为bd09Point -> lat: ${bd09Point[1]} , lng: ${bd09Point[0]}`)

const gcj02Point = converter.wgs84togcj02(wgs84Point[1], wgs84Point[0])

console.log(`转化为gcj02Point -> lat: ${gcj02Point[1]} , lng: ${gcj02Point[0]}`)
