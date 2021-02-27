const app = Vue.createApp ({ 
    data() {
        return {
            photos: [{
                    img: 'images/g.jpg',
                    alt: 'gallardo',
                    title: 'Lamboghini : Gallardo',
                    done: false,
                    show: true
                },
                {
                    img: 'images/h.jpg',
                    alt: 'huracan',
                    title: 'Lamboghini : Huracan',
                    done: false,
                    show: true
                },
                {
                    img: 'images/a.jpg',
                    alt: 'aventador',
                    title: 'Lamboghini : Aventador',
                    done: false,
                    show: true
                }
            ],
            showSrc: false,
            hideSrc: true,
            nophoto: false,
            expand: false,
            bigPic: "",
        }
    },
    computed: {
        totalphoto() {
            return this.photos.length
        }
    },
    methods: {
        Src() {
            this.showSrc = true;
            this.hideSrc = false;

        },
        cancelFun() {
            this.showSrc = false;
            this.hideSrc = true;
            this.nophoto = false;
            for (let i = 0; i < this.photos.length; i++) {
                this.photos[i].show = true;

            }
        },
        enterSrc(inputTask) {
            let noPic = 0;
            for (let i = 0; i < this.photos.length; i++) {
                if (this.photos[i].title.toLowerCase().includes(inputTask.toLowerCase())) {
                    this.photos[i].show = true;
                } else {
                    this.photos[i].show = false;
                    noPic++;
                }
                if (noPic == this.photos.length) {
                    this.nophoto = true;
                }
            }
        },
        zoom(index) {
            this.expand = true;
            this.bigPic = this.photos[index].img;
        },
        expandfalse(){
            this.expand=false;
        }

    }


})
