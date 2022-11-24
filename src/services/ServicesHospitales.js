import axios from "axios";
import Global from "@/Global";

export default class ServiceDepartamentos {

    getHospitales(){
        return new Promise(function(resolve){
            var request = 'api/hospitales';
            var url = Global.urlHospitales +request;
            axios.get(url).then(response=>{
                resolve(response.data);
            })
        })
    }

    getDetalles(idHos){
        return new Promise(function(resolve){
            var request = 'api/Hospitales/'+idHos;
            var url = Global.urlHospitales +request;
            axios.get(url).then(response=>{
                console.log(url);
                resolve(response.data);
            })
        })
    }

    insertarHosp(hospital){
        return new Promise(function(resolve){
            var request = 'api/hospitales';
            var url = Global.urlHospitales +request;
            axios.post(url,hospital).then(response=>{
                resolve(response);
            })
        })
    }

    findId(id){
        return new Promise(function(resolve){
            var request = 'api/hospitales/'+id;
            var url = Global.urlHospitales +request;
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }

    modificarHosp(hospital){
        return new Promise(function(resolve){
            var request = 'api/hospitales';
            var url = Global.urlHospitales +request;
            axios.put(url,hospital).then(response=>{
                resolve(response);
            })
        })
    }

    borrarHosp(id){
        return new Promise(function(resolve){
            var request = 'api/hospitales/'+id;
            var url = Global.urlHospitales +request;
            axios.delete(url).then(response=>{
                resolve(response);
            })
        })
    }
}