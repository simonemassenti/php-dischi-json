const { createApp } = Vue;

createApp({
    data() {
        return{
            apiURL: "index.php",
            discs: []
        }
    },
    created(){
        axios.get(this.apiURL)
        .then((resp)=>{
            this.discs = resp.data;
        });
    }
}).mount("#app");