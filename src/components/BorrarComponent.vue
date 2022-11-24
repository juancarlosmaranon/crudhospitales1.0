<template>
    <div>
       <h1>Borrar</h1> 
    </div>
</template>

<script>
import ServiceDepartamento from './../services/ServicesHospitales';
const service = new ServiceDepartamento;

export default {
    name: 'BorrarComponent',
    mounted(){
       service.borrarHosp(this.$route.params.id).then(res=>{
            console.log(res);
            //Lo redirijimos a la pagina principal
            this.$router.push("/hospitales");
       });
    },
    data() {
        return {
            
        };
    },
};
</script>

<style scoped>

</style>