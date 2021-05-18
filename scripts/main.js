import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'
// https://cdn.jsdelivr.net/npm/vue@2.6.12
// import apiRequest from './utils/services/requestService.js'

const apiUrl = 'https://api-ssl.bitly.com/v4/shorten'
const apiKey = 'b4699bd08b3f1b396d7f0b4e98c67b42d98151b1'
// const apiUrl = process.env.VUE_APP_API_URL;
// const apiKey = process.env.VUE_APP_API_KEY;

const apiClient = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
    headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
})

// Vue.component("name", {
//     props: [""],
//     template: ``,
// })

var obj = {
    reveal: false,
    revealState: "View",
    originalUrl: "",
    shortenedUrl: "",
    copyMessage: "Copied!",
    show: false,
    loading: false,
    error: false,
    wrongInput: false,
    emptyShortUrl: false,
}

new Vue({
    el: '#app',
    data: obj,

    methods: {
        toggleInfo() {
            this.reveal = !this.reveal

            if (this.reveal === false) {
                this.revealState = "View"
            } else this.revealState = "Hide"
        },

        checkUrl(url) {
            return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,=]|:|@)|\/|\?)*)?$/i.test(url)
        },

        urlShortener(originalUrl) {
            return apiClient.post('', {
                "domain": "bit.ly",
                "long_url": originalUrl
                // "long_url": "https://dev.bitly.com"
                // https://bitly.is/3hzP1N8
            })
        },

        async getShortenedUrl(originalUrl) {
            if (originalUrl && this.checkUrl(originalUrl)) {
                try {
                    this.loading = true
                    const response = await this.urlShortener(originalUrl)
                    // const response = await apiRequest.urlShortener()

                    if ([200, 201].includes(response.status)) {
                        this.shortenedUrl = response.data.link
                        this.loading = false
                    }
                } catch (e) {
                    // console.log(e)
                    this.loading = false
                    this.error = true

                    setTimeout(() => {
                        this.error = false
                    }, 5000);
                }
            } else {
                this.wrongInput = true

                setTimeout(() => {
                    this.wrongInput = false
                }, 5000);
            }
        },

        copyUrl() {
            if (this.shortenedUrl) {
                var clipboard = new ClipboardJS('.btn')
                var vm = this

                clipboard.on('success', function (e) {
                    // console.info('Action:', e.action)
                    // console.info('Text:', e.text)
                    // console.info('Trigger:', e.trigger)

                    vm.copyMessage = "Copied!"
                    vm.show = true

                    setTimeout(() => {
                        vm.show = false
                    }, 3000)

                    e.clearSelection()
                })

                clipboard.on('error', function (e) {
                    // console.error('Action:', e.action)
                    // console.error('Trigger:', e.trigger)
                    vm.copyMessage = "Unable to copy text"
                    vm.show = true

                    setTimeout(() => {
                        vm.show = false
                    }, 3000)
                })
            } else {
                this.emptyShortUrl = true

                setTimeout(() => {
                    this.emptyShortUrl = false
                }, 5000)
            }
        }
    },
})
