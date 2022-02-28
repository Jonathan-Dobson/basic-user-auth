const axios = require('./Axios')
const token = process.env.TEST_TOKEN;

axios.setToken(token)

const pass = (res) => {
    // console.log('\n TEST PASS')
    console.log('=================\n')
    console.log('METHOD: ',res.request.socket._httpMessage.method)
    // console.log('PATH: ',res.request.socket._httpMessage.path)
    // console.log(res.data.length ? res.data.length + ' results' : '')
    console.log('STATUS: ',res.request.res.statusMessage)
    // console.log(res.data)
    // console.log('\n')
}

const fail = (err) => {
    console.log('\nFAIL')
    console.log(err)
    console.log('=================')
}

const test = (func) => {
    func
    .then(r=>pass(r))
    .catch(e=>fail(e))
    
}

// TEST 

function testAll(){

    test(axios.postOne({title: 'wake me up'}))
    test(axios.getAll())
    axios.getAll().then(async r=>{
        let lastItem = (r.data[r.data.length-1]._id)
        await test(axios.getById(lastItem))
        await test(axios.put({title: 'I am awake'},lastItem))
        await test(axios.deleteById(lastItem))
    })

}
    
testAll()