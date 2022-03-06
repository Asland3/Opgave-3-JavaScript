Vue.createApp({
    data() {
        return {
            text: null,
            message: null,
            message2: null,
            message3: null,
            message4: null,
            message5: null,
            message6: null,
            message7: null,
        }
    },
    methods: {
        stringManipulation(text) {
            if (this.text === null | "")
            {
                this.text = "You need to write something here"
            }
            else {

            this.message = this.text;
            this.message2 = this.text.toLowerCase();
            this.message3 = this.text.toUpperCase();
            this.message4 = this.text.charAt(0).toUpperCase() + this.text.slice(1)
            this.message5 = this.text.charAt(0).toLowerCase() + this.text.slice(1)
            this.message6 = this.text.split("").reverse().join("")
            this.message7 = this.text.slice(0, -1) + this.text.charAt(this.text.length-1).toUpperCase()

            }
            
        },

    }
}).mount("#app")