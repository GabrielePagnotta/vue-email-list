var app = new Vue({
el: '#app',
data: {

    input:[],
   
    
    
},
mounted() {
    for (let i = 0; i < 10; i++) {
        
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {
     console.log( response.data.response )
     let responseData = response.data.response
      this.input.push(responseData)
      console.log(responseData)

    })

        
    }
    

    
},
beforeUpdate() {

},
methods: {

},
})
