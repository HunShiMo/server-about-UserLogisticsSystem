const express = require("express");
const bodyParser = require('body-parser');

// 设置监听端口
const PORT = 88;
const app = express();

// 使用body-parser中间件解析POST请求的请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/auth/user/login", (req, res) => {
  const reqData = req.body
  console.log("登录接口 参数", reqData)
  res.json({
    "msg": "操作成功",
    "code": 200,
    "data": {
      "token": "123",
      "refreshToken": "456",
      "member": {
        "userId": 4,
        "userName": "Ada",
        "phoneNum": "13512341234",
        "accPassId": 8
      }
    }
  })
})

app.post("/api/auth/token/refreshAccessToken", (req, res) => {
  const reqData = req.body
  console.log("刷新接口 参数", reqData)
  res.json({
    "msg": "操作成功",
    "code": 200,
    "data": {
      "newAccessToken": "banananana",
      "expireTime": 1688177560048
    }
  })
})

// 根据用户id查找用户创建的地址
app.get("/api/users/address/getAddressListByUserId", (req, res) => {
  const reqData = req.query
  console.log("根据id查找用户的地址 参数", reqData);
  res.json({
    "msg": "操作成功",
    "code": 200,
    "data": [
        {
            "addressId": 5,
            "userId": 4,
            "province": "山东省",
            "city": "临沂市",
            "district": "罗庄区",
            "street": "傅庄街道",
            "addressDetail": "123号",
            "name": "test1",
            "phoneNum": "15963521633"
        },
        {
            "addressId": 6,
            "userId": 4,
            "province": "山东省",
            "city": "临沂市",
            "district": "罗庄区",
            "street": "傅庄街道",
            "addressDetail": "456号",
            "name": "test2",
            "phoneNum": "15963521633"
        }
    ]
  })
})

// 更新地址信息
app.put("/api/users/address", (req, res) => {
  const reqData = req.body
  console.log("更新地址信息 参数",reqData);
  res.json({
    "msg": "操作成功",
    "code": 200
  })
})

// 添加地址信息
app.post("/api/users/address", (req, res) => {
  const reqData = req.body
  console.log("添加地址信息 参数",reqData);
  res.json({
    "msg": "操作成功",
    "code": 200
  })
})

// 删除地址信息
app.delete("/api/users/address/:addressId", (req, res) => {
  const reqData = req.params
  console.log("删除地址信息 参数",reqData);
  res.json({
    "msg": "操作成功",
    "code": 200
  })
})

app.post("/api/order/order", (req, res) => {
  const reqData = req.body
  console.log("新增订单信息 参数",reqData);
  res.json({
    "msg": "操作成功",
    "code": 200
  })
})

// 根据用户id查找用户创建的地址
app.get("/api/order/package/list", (req, res) => {
  const reqData = req.query
  console.log("根据id查找用户的物流信息 参数", reqData);
  res.json({
    "msg": "操作成功",
    "code": 200,
    "data": [
        {
            "senderAddress": {
              "city": "烟台市",
              "name": "向往",
              "phoneNum": "13255667788",
            },
            "receiverAddress": {
              "city": "杭州市",
              "name": "Ada",
              "province": "浙江省",
              "district": "桐庐县",
              "street": "富春路",
              "addressDetail": "123号",
              "phoneNum": "13255667788"
            },
            "orderInfo": {
              "orderId": 6,
              "createTime": new Date()
            },
            "waybill": {
              "waybillId": 1,
              "waybillStatus": "正在派送"
            }
        },
        {
            "senderAddress": {
              "city": "烟台市",
              "name": "向往",
              "phoneNum": "13255667788",
            },
            "receiverAddress": {
              "city": "杭州市",
              "name": "Ada",
              "province": "浙江省",
              "district": "桐庐县",
              "street": "富春路",
              "addressDetail": "123号",
              "phoneNum": "13255667788"
            },
            "orderInfo": {
              "orderId": 6,
              "createTime": new Date()
            },
            "waybill": {
              "waybillId": 1,
              "waybillStatus": "正在派送"
            }
        },
        {
            "senderAddress": {
              "city": "烟台市",
              "name": "向往",
              "phoneNum": "13255667788",
            },
            "receiverAddress": {
              "city": "杭州市",
              "name": "Ada",
              "province": "浙江省",
              "district": "桐庐县",
              "street": "富春路",
              "addressDetail": "123号",
              "phoneNum": "13255667788"
            },
            "orderInfo": {
              "orderId": 6,
              "createTime": new Date()
            },
            "waybill": {
              "waybillId": 1,
              "waybillStatus": "正在派送"
            }
        }
    ]
  })
})

// 删除物流信息信息
app.delete("/api/order/package/:orderId", (req, res) => {
  const reqData = req.params
  console.log("删除地址信息 参数",reqData);
  res.json({
    "msg": "操作成功",
    "code": 200
  })
})

app.get("/hello", (a,b) => {
  b.send("hello")
})

app.listen(PORT, () => {
  console.log(`服务器运行端口: ${PORT}`);
});
