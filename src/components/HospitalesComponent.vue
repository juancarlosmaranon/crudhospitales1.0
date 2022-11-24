<template>
    <div>
       <h1></h1> 
       <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Camas</th>
                    <th>Detalles</th>
                    <th>Modificar</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hosp in hospitales" :key="hosp">
                    <td>{{hosp.nombre}}</td>
                    <td>{{hosp.direccion}}</td>
                    <td>{{hosp.telefono}}</td>
                    <td>{{hosp.camas}}</td>
                    <td><router-link class="btn btn-info" :to="'/details/'+hosp.idHospital">Detalles</router-link></td>
                    <td><router-link class="btn btn-warning" :to="'/modificar/'+hosp.idHospital">Modificar</router-link></td>
                    <td><router-link class="btn btn-danger" :to="'/borrar/'+hosp.idHospital">Borrar</router-link></td>
                </tr>
            </tbody>
       </table>
    </div>
</template>

<script>
import ServiceDepartamento from './../services/ServicesHospitales';
const service = new ServiceDepartamento;

export default {
    name: 'HospitalesComponent',
    methods:{
        loadHospitales(){
            service.getHospitales().then(result=>{
                this.hospitales = result;
                console.log(this.hospitales);
            })
        }
    },
    mounted(){
        this.loadHospitales();
    },
    data() {
        return {
            hospitales:[]
        };
    },
};
</script>

<style scoped>

</style>