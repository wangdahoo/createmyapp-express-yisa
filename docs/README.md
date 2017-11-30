---
title: API文档
---

## 规范


### 版本

当前 API 版本为 **`1.0`**


### 响应格式

API 默认响应 Content-Type 为 `application/json` , 格式统一如下：

```json
{
    "err_code": 0,
    "err_msg": "",
    "payload": {
        // ...
    }
}
```

| 字段 | 类型 | 描述 | 默认 |
| ----- | ----- | ----- | ----- |
| err_code | Integer | 错误码 | 0 |
| err_msg | String | 错误信息 | 空字符串 |
| payload | Object | 数据 | - |

> API 返回 200 时， `err_code` 默认为 0，表示无错误。


### 异常

API 异常默认抛 HTTP 400 状态码，在 `route` 的回调函数中直接使用 `res.fail` 方法即可。`err_code` 返回**5位数字**，前3位跟随 HTTP 状态码，`err_msg` 则按具体业务异常而定。

例：发送验证码接口，当手机号无效时，可以返回如下 response：

```json
{
    "err_code": 40001, // 此时，http code 返回 400
    "err_msg": "手机号无效"
}
```
