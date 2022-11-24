<template>
    <div>
       <h1>Insertar Hosp</h1> 
       <form method="POST" class="form-control" @submit.prevent="insertarHospital()">
        <label>Id:</label>
        <input class="form-control" type="number" v-model="hospital.idhospital"/>
        <label>Nombre:</label>
        <input class="form-control" type="text" v-model="hospital.nombre"/>
        <label>Direccion:</label>
        <input class="form-control" type="text" v-model="hospital.direccion"/>
        <label>Telefono:</label>
        <input class="form-control" type="text" v-model="hospital.telefono"/>
        <label>Camas:</label>
        <input class="form-control" type="number" v-model="hospital.camas"/>
        <button class="btn btn-success">Crear</button>
       </form>
    </div>
</template>

<script>
import ServiceDepartamento from './../services/ServicesHospitales';
const service = new ServiceDepartamento;

export default {
    name: 'InsertarComponent',
    methods:{
        insertarHospital(){
            service.insertarHosp(this.hospital).then(result=>{
                console.log(result);
                this.$router.push("/hospitales");
            })
        }
    },
    mounted(){
        
    },
    data() {
        return {
            hospital:{
                idhospital:0,
                nombre:"",
                direccion:"",
                telefono:"",
                camas:0
            }
        };
    },
};
</script>

<style scoped>

</style>