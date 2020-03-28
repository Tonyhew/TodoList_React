import React, { useState, useEffect } from 'react'
import { Row, Col, Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import '../static/style/Todo.css'
import axios from 'axios'
import '../static/data'

function TodoList() {
    var storage = window.localStorage
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const getList = () => {
        // axios.get('http://www.test.com')
        //     .then(
        //         (res) => {
        //             setList(res.data.list)
        //             storage.setItem("list", res.data.list)
        //         }
        //     )
        //     .catch(
        //         (err) => {
        //             console.log(err)
        //         }
        //     )
    }

    useEffect(() => {
        getList()
        setList(JSON.parse(storage.getItem("list")))
    }, [])

    const clickInput = (e) => {
        setInput(e.target.value)
    }

    const addList = () => {
        list.push(input)
        storage.setItem("list", JSON.stringify(list))
        setInput('')
    }

    const delList = (e) => {
        let index = e.target.getAttribute('data-index')
        let arr = JSON.parse(JSON.stringify(list))
        console.log(arr)
        arr.splice(index, 1)
        setList(arr)
    }

    return (

        <div className="wrap">
            <Row span={24}>
                <Col span={24}>
                    <Row span={24} className='activeButton'>
                        <Col span={20}>
                            <Input placeholder='待办事项' value={input} onChange={clickInput} />
                        </Col>
                        <Col span={4}>
                            <Button className='addButton' onClick={addList}>增加</Button>
                        </Col>
                    </Row>

                    <List
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => (
                            <List.Item onClick={delList} data-index={index} key={index}>{item}</List.Item>
                        )}
                    />

                </Col>
            </Row>
        </div>

    )


}

export default TodoList








