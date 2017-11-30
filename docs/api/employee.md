---
title: 员工接口文档
---

## 员工接口

### 员工登录接口

##### URL

    /employee/login

##### 方法

    POST

##### 参数

| 参数名 | 类型 | 描述 | 必选 |
| ----- | ----- | ----- | ----- |
| username | **string** | 用户名 | 是 |
| password | **string** | 密码 | 是 |

##### 响应

* 成功

```json
{
  "err_code": 0,
  "payload": {
    "token": "6db5278d028c464bb9427aac64da813b",
    "expires_at": 1511157834
  }
}
```

* payload
        
| 字段名 | 类型 | 描述 |
| ----- | ----- | ----- |
| token | **string** | 登录授权 token, 用于设置 `X-YS-TOKEN` 请求头 |
| expires_at | **int** | token 过期时间戳（Unix 时间戳，单位：秒）|

* 失败

```json
{
  "err_code": 40001,
  "err_msg": "用户名或密码不正确"
}
```

错误码

* `40000`: 参数错误
* `40001`: 用户名或密码不正确
