//mixin
var Sharable = {
    data: function () {
        return {
            _isProcessing: false
        }
    },
    created: function () {
        console.log('Sharableミックスインのフックが呼ばれました')
    },
    methods: {
        share: function () {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 3000)
        }
    }
}

var IconShareButton = {
    mixins: [Sharable],
    created: function () {
        console.log('IconShareButtonのフックが呼ばれました')
    },
    template: `
        <button @click="share"><i class="fas fa-share-square"</i></button>
    `,
}

var TextShareButton = {
    mixins: [Sharable],
    created: function () {
        console.log('TextShareButtonのフックが呼ばれました')
    },
    template: `
        <button @click="share">{{buttonLabel}}</button>
    `,
    data: function () {
        return {
            buttonLabel: 'シェアする'
        }
    },
    methods: {
        share() {
            window.alert('コンポーネントからシェアしました')
        }
    }
}

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
})