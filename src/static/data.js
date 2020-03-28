import Mock from 'mockjs'

const data = Mock.mock('http://www.test.com', {
    "list": [
        '基础按摩', 
        '躺式采耳', 
        '中药泡脚', 
        '足底按摩'
    ]
})

export default data
