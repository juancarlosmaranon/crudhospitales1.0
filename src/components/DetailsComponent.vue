<template>
    <div>
       <h1>Detalles</h1> 
       <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Camas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{detalles.nombre}}</td>
                    <td>{{detalles.direccion}}</td>
                    <td>{{detalles.telefono}}</td>
                    <td>{{detalles.camas}}</td>
                </tr>
            </tbody>
       </table>
       <router-link class="btn btn-danger" :to="'/hospitales'">Volver</router-link>
    </div>
</template>

<script>
import ServiceDepartamento from './../services/ServicesHospitales';
const service = new ServiceDepartamento;

export default {
    name: 'DetailsComponent',
    methods:{
        loadHosp(){
            service.getDetalles(this.$route.params.id).then(result=>{
                this.detalles = result;
            })
        }
    },
    mounted(){
        this.loadHosp();
        console.log(this.detalles);
    },
    data() {
        return {
            detalles:{}
        };
    },
};
</script>

<style scoped>

</style>