import React, { useState } from 'react'
import { Row, Col, Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import '../static/style/Todo.css'

function TodoList() {

    const [ input, setInput ] = useState('')
    const [ list, setList ] = useState([])

    const clickInput = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    const addList = (e) => {
        list.push(input)
        setInput('')
    }

    const delList = (e) => {
        console.log(e)
        let index = e.target.getAttribute('data-index')
        let arr = JSON.parse(JSON.stringify(list))
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








