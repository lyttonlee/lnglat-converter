## WGS84 GCJ02 BD09坐标系经纬度互相转换

### GPS点的坐标系为WGS84,国内百度地图的坐标系为BD09，高德地图坐标系为GCJ02，WGS84的坐标点要正确显示在百度或高德地图上需要一个转换方法(仅中国境内的点需要转换, 位于国外的点会按原坐标返回)

### Install

```sh
npm install lnglat-converter
```

### use

```javascript
import converter from 'lnglat-converter'
//  [lat, lng]
const wgs84Point = [32, 106]

// wgs84tobd09(lng, lat)
// return [lng, lat]
const bd09Point = converter.wgs84tobd09(wgs84Point[1], wgs84Point[0])

// bd09Point -> [106.01040868983318, 32.00356002052303]

const gcj02Point = converter.wgs84togcj02(wgs84Point[1], wgs84Point[0])

// gcj02Point -> [106.0038603381513, 31.997775713491148]

```

### methods

> 提供以下转换方法

**注意**

> 调用wgs84tobd09时不支持解构赋值的方式

```javascript

//  error

import { wgs84tobd09 } from 'lnglat-converter'

// wgs84tobd09 方法实际上先调用 -> wgs84togcj02 -> 然后调用 gcj02tobd09

// 所以请不要单独引入 wgs84tobd09 方法来转换坐标

// ------------------

// ok 以下方式可以正常工作

import { gcj02tobd09, wgs84togcj02 } from 'lnglat-converter'
```


> 推荐方式

```javascript
import converter from 'lnglat-converter'
converter.bd09togcj02(lng, lat)
converter.gcj02tobd09(lng, lat)
converter.wgs84tobd09(lng, lat)
converter.wgs84togcj02(lng, lat)
converter.gcj02towgs84(lng, lat)

// return [lng, lat]
```

