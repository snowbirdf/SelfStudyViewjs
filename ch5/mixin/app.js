var IconShareButton = {
    template: `
        <button @click="share"><i class="fas fa-share-square"</i></button>
    `,
    data: function () {
        return {
            _isProcessing: false
        }
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

var TextShareButton = {
    template: `
        <button @click="share">{{buttonLabel}}</button>
    `,
    data: function () {
        return {
            buttonLabel: 'シェアする',
            _isProcessing: false
        }
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

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
})