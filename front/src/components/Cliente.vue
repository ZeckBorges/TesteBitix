<template>
    <div>
        <h1>Cadastro de Clientes</h1>
        <form v-on:submit.prevent="post" method="post">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" v-model="this.clientes.nome"><br>
            <label for="idade">idade:</label><br>
            <input type="text" id="idade" name="idade" v-model="this.clientes.idade"><br>
            <label for="plano">plano:</label><br>
            <input type="text" id="plano" name="plano" v-model="this.clientes.plano">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'Cliente',

        data(){
            return{
                clientes: {
                    nome: '',
                    idade: '',
                    plano: ''
                }
            }
        },

        methods:{
            post(){
                axios.post('http://localhost:8181/register/cliente', this.clientes)
                .then( (res) => {
                console.log('cliente', this.clientes)
                console.lgo('res', res.data)
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>
