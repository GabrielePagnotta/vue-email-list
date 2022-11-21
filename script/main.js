var app = new Vue({
el: '#app',
data: {

    input:"",
},
mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {
    // console.log( response.data.response )
     let responseData = response.data.response
      this.input = responseData
    })

    
},
beforeUpdate() {

},
methods: {

},
})