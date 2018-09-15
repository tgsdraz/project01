const express = require('express');
const router = express.Router();
const pool = require('../database/pool')
//进货管理==>物品数量为零时 删除数据 同时更新数据库
router.post('/delete', (req, res) => {
    const data = req.body
    console.log(data)
    pool.getConnection((err, connection) => {
        connection.query(`delete from good where good_name='${data.good_name}' and good_mark='${data.good_mark}'`, (err, result) => {
            console.log(result);
            res.send(result);
            connection.release()
        })
    })
})
//进货管理==》增加或减少物品 更新数据库
router.post('/update', (req, res) => {
    const data = req.body
    pool.getConnection((err, connection) => {
        connection.query(`update good set good_num='${data.good_num}' where good_name='${data.good_name}' and good_mark='${data.good_mark}'`, (err, result) => {
            res.send(result);
            connection.release()
        })
    })
})
router.get('/get', (req, res) => {

    pool.getConnection((err, connection) => {
        connection.query(`select * from good`, (err, result) => {
            console.log(result);
            res.send(result);
            connection.release()
        })
    })
})
router.post('/login', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    pool.getConnection((err, connection) => {
        connection.query(`select * from user where username='${user.username}' and password='${user.password}'`, (err, result) => {
            console.log(result);
            res.send(result);
            connection.release()
        })
    })
})
router.post('/regedit', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    pool.getConnection((err, connection) => {
        connection.query(`select * from user where username='${user.username}'`, (err, result) => {
            console.log(result);
            if (result.length == 0) {
                connection.query(`insert into user(user_id,username,password) values(0,'${user.username}','${user.password}')`, (err, result) => {
                    if (err)
                        throw err
                    console.log(result);
                    res.send('success');
                    connection.release()
                })
            } else {
                res.send('fail')
            }

        })

    })
})
router.post('/add', (req, res) => {
    const goods = {
        good_mark: req.body.good_mark,
        good_name: req.body.good_name,
        good_price: req.body.good_price,
        good_num: req.body.good_num
    }

    // '${goods.good_name}','${goods.good_price}','${goods.good_mark}'
    console.log(goods)
    pool.getConnection((err, connection) => {
        if (goods.good_mark && goods.good_name && goods.good_num && goods.good_price) {
            connection.query(`select * from good where good_mark='${goods.good_mark}' and good_name='${goods.good_name}'`, (err, result) => {
                console.log(result);
                if (result.length === 0) {
                    connection.query(`insert into good(good_id,good_name,good_price,good_mark,good_num) values(0,'${goods.good_name}','${goods.good_price}','${goods.good_mark}','${goods.good_num}')`, (err, result) => {
                        console.log(result)
                        res.send('添加成功')
                        connection.release()
                    })
                } else {
                    console.log(typeof result[0].good_num)
                    const num = result[0].good_num + parseInt(goods.good_num)
                    console.log(num)
                    connection.query(`update good set good_num=${num} where good_mark='${goods.good_mark}'`, (err, result) => {
                        console.log(result)
                        res.send('数据更新成功')
                        connection.release()
                    })
                }
            })
        } else {
            res.send('fail')
        }

    })
})
module.exports = router;