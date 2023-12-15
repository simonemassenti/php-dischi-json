const { createApp } = Vue;

createApp({
    data() {
        return{
            apiURL: "index.php",
            discs: [],
            info: {
                index: 0,
                active: false,
                disc: {}
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
            axios.get(this.apiURL)
        .then((resp)=>{
            this.info.disc = resp.data[this.info.index];
            console.log(this.info.disc.poster);
        });
        },
        closeInfo() {
            this.info.active = false;
        }
    }
}).mount("#app");