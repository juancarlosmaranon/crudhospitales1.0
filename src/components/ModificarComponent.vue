<template>
  <div>
    <h1>modificar</h1>
    <form @submit.prevent="modificarHosp()" v-if="hospital">
        <label>Nombre:</label>
        <input class="form-control" type="text" v-model="hospital.nombre" />
        <label>Direccion:</label>
        <input class="form-control" type="text" v-model="hospital.direccion" />
        <label>Telefono:</label>
        <input class="form-control" type="text" v-model="hospital.telefono" />
        <label>Camas:</label>
        <input class="form-control" type="number" v-model="hospital.camas" />
        <button class="btn btn-success">Modificar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamento from "./../services/ServicesHospitales";
const service = new ServiceDepartamento();

export default {
  name: "ModificarComponent",
  methods: {
    findId() {
      service.findId(this.$route.params.id).then((result) => {
        this.hospital = result.data;
        console.log(this.hospital);
        console.log(result.data);
      });
    },
    modificarHosp() {
      service.modificarHosp(this.hospital).then((result) => {
        this.hospital = result.data;
        this.$router.push("/hospitales");
      });
    },
  },
  mounted() {
    this.findId();
  },
  data() {
    return {
      hospital: null,
      idhospital:0
    };
  },
};
</script>

<style scoped></style>
