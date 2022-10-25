<template>
    <div>
        <h1>Beneficários</h1>
        <div v-for="(cliente, index) in clientes" :key="index">
            <p>{{ cliente.nome }}</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Beneficiario',
        data(){
            return{
                clientes: []
            }
        },

        created: function(){
            axios.get('http://localhost:8181/beneficiarios').then(res => {
                this.clientes = res.data
            })
        }
    }

</script>
