new Vue({
        el: '#exercise',
        data: {
            keyAllValue: "Key All",
            keyDownValue: "Key Down",
        },
        methods: {
          alertFn: function() {
            alert("Alert!");
          },
          keyAllListen: function(event){
             return this.keyAllValue = event.target.value;
          },
          keyDownListen: function(event){
             return this.keyDownValue = event.target.value;
          },
        }
    });
