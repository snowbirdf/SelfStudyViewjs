import { mount } from '@vue/test-utils'
import KbnLoginForm from '@components/molecules/KbnLoginForm.vue'
import { isRegExp } from 'util'

describe('KbnLoginForm', () => {
  describe('プロパティ', () => {
    describe('validation', () => {
      let loginForm
      beforeEach(done => {
        loginForm = mount(KbnLoginForm, {
          propsData: {onlogin: () => {}}
        })
        loginForm.vm.$nextTick(done)
      })

      describe('email', () => {
        describe('required', () => {
          describe('何も入力されていない', () => {
            it('validation.email.requiredがinvalidであること', () => {
              loginForm.setData({email: ''})
              expect(loginForm.vm.validation.email.required).to.equl(false)
            })
          })

          describe('入力あり', () => {
            it('validation.email.requiredがvalidであること', () => {
              loginForm.setData({email: 'foo@domain.com'})
              expect(loginForm.vm.validation.email.required).to.equl(true)
            })
          })

          describe('format', () => {
            describe('メールアドレス形式でないフォーマット', () => {
              it('validation.email.formatがinvalidであること', () => {
                loginForm.setData({email: 'foobar'})
                expect(loginForm.vm.validation.email.format).to.equl(false)
              })
            })

            describe('メールアドレス形式のフォーマット', () => {
              it('validation.email.formatがvalidであること', () => {
                loginForm.setData({email: 'foo@domain.com'})
                expect(loginForm.vm.validation.email.format).to.equal(true)
              })
            })
          })
        })
      })
    })
  })
})
