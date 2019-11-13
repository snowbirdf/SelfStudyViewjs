var assert = require('assert')
var loginForm = require('../components/loginForm')

describe('login()', function () {
    var vm
    beforeEach(function () {
        vm = new loginFor().$mount()
    })

    // userid passwordの初期値をテスト
    it('check initial values', function () {
        assert.equal(vm.userid, '')
        assert.equal(vm.password, '')
    })

    // loginメソッドの返り値をテスト 
    it('check returned value - login()', function () {
        vm.userid = 'testUser'
        vm.password = "password"
        var result = vm.login()
        assert.deepEqual(result, {
            userid: 'testUser',
            password: 'password'
        })
    })
})