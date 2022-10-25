<template>
    <div>
        <h1>Preços</h1>
        <div v-for="(preco, index) in precos" :key="index">
            <p>{{ preco.faixa1 }}</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Precos',
        data(){
            return{
                precos: []
            }
        },

        created: function() {
            axios.get('http://localhost:8181/precos').then(res => {
                this.precos = res.data
                console.log('precos', res.data)
            })
        }
    }

</script>
