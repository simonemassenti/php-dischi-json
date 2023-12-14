const { createApp } = Vue;

createApp({
    data() {
        return{
            apiURL: "index.php",
            discs: [],
            info: {
                index: 0,
                active: false
            }
        }
    },
    created(){
        axios.get(this.apiURL)
        .then((resp)=>{
            this.discs = resp.data;
        });
    },
    methods: {
        showInfo(i){
            this.info.index = i;
            this.info.active = true;
        },
        closeInfo() {
            this.info.active = false;
        }
    }
}).mount("#app");