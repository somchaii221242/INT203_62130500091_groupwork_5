app.component('photo-item', {
    props: {
        photos:{
            type:Array,
            require:true
        }
    },
    template:
        /*html*/
    `
    <div class="flex flex-col mt-4">
        <ul class="flex flex-col space-y-5 w-7/12 space-between ">
          <li v-for="(photo, index) in photos" class="flex ">
            <button v-show="photo.show" v-on:dblclick="zoom(index)" v-on:click="photo.done = !photo.done"> <img
                v-bind:src="photo.img"></button>
            <span v-show="photo.show" class="pl-10 pt-10">{{photo.title}}</span>
            <i v-show="photo.done" class="im im-heart  text-red-400 pt-10 pl-5"></i>
          </li>
        </ul>
      </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        zoom(index){
            this.$emit('zoom-popup',index)
        }
    }
})