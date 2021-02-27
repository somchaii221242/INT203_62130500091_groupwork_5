app.component('photo-search', {
    props: {
      hideSrc: Boolean,  
      showSrc: Boolean,
      
    },
    template:
      /*html*/
      `
      <div class="flex flex-col">
       
       <button v-show="hideSrc" @click="Src"> <i class="material-icons p-1 ">
          search
        </i></button>
       <input v-show="showSrc" @keyup.enter="enterSrc" type="text" v-model="inputTask" class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500 pl-1">
       <button @click="cancelFun" v-show="showSrc" class="bg-blue-500 text-white  rounded-lg font-semibold text-lg ">Cancel</button>
      </div>
     
       `,
    data() {
      return {
        inputTask :""
      }
    },
    methods: {
       Src(){
            this.$emit('src-search')
        },
       enterSrc(){
           this.$emit('enter-src',this.inputTask)
       },
       cancelFun(){
           this.$emit('cancel-fun')
       }
    }
  }
  )