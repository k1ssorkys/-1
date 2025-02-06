let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Mastery',
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },

        description: "A pair of warm, fuzzy socks.",
        altText: "A pair of socks",
        inStock: false,
        link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
        selectedVariant: 0,


        updateProduct(variantImage) {
            this.image = variantImage
        },

        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        },


    },


    computed: {
        title(){
            return this.brand + ' ' + this.product;
        }
    },

})




