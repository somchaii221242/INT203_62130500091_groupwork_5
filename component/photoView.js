app.component('photo-view',{
    props:{
       expand: Boolean,
       bigPic: String
    },
    template: 
    /*html*/
    `
    <div v-show="expand" class="flex bg-black w-96 p-5 pb-0.10 pt-1">
      <img :src="bigPic" class="bg-black w-80 mt-4 pl-5">
      <button @click="expandfalse" class="text-white h-0 pl-5">
      <div class=" rounded-none bg-red-400 w-5 "> X </div>
      </button>
   </div>
    `,
    data(){
        return {
            
        }
    },
    methods: {
        expandfalse(){
            this.$emit('expand-false')
        }
    }
    }
)