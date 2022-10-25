<template>
    <div>
        <h1>Planos</h1>
        <div v-for="(plano, index) in planos" :key="index">
            <p>{{ plano.nome }}</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Planos',
        data(){
            return{
                planos: [],
            }
        },

        created: function(){
            axios.get('http://localhost:8181/planos').then(res => {
                this.planos = res.data
                console.log('planos', res.data)
            })
        }
    }

</script>
