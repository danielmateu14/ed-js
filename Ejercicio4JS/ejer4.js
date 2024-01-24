class Autobus {
    constructor(capacidad, matricula, listadoConductores) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.matricula = matricula;
        this.listadoConductores = listadoConductores;
    }
    getCapacidad() {
        return this.capacidad;
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }
    getPasajeros() {
        return this.pasajeros;
    }
    setPasajeros(pasajeros) {
        this.pasajeros = pasajeros;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    getListadoConductores() {
        return this.listadoConductores;
    }
    setListadoConductores(listadoConductores) {
        this.listadoConductores = listadoConductores;
    }


    subir(numPasajeros) {
        if (this.pasajeros + numPasajeros <= this.capacidad) {
            this.pasajeros += numPasajeros;
        } else {
            this.pasajeros = this.capacidad;
        }
    }

    bajar(numPasajeros) {
        if (this.pasajeros - numPasajeros >= 0) {
            this.pasajeros -= numPasajeros;
        } else {
            this.pasajeros = 0;
        }
    }
    mostrarDatosAutobus() {
        console.log("Matrícula del autobús: " + this.matricula);
        console.log("Capacidad del autobús: " + this.capacidad);
        console.log("Número de pasajeros:" + this.pasajeros);
        console.log("Listado de conductores:");
        for (let i = 0; i < this.listadoConductores.length; i++) {
            this.listadoConductores[i].mostrarDatosConductor();
        }

    }

    buscarConductor(licencia) {
        for (let i = 0; i < this.listadoConductores.length; i++) {
            if (this.listadoConductores[i].getLicencia() === licencia) {
                return true;
            }
        }
        return false;
    }
    
    

}




class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getLicencia() {
        return this.licencia;
    }
    setLicencia(licencia) {
        this.licencia = licencia;
    }
    mostrarDatosConductor() {
        console.log("Nombre del conductor:" + this.nombre);
        console.log("Número de licencia: " + this.licencia);
    }


}
function main() {


    let Conductores = new Array();

    Conductores[0] = new Conductor('Moha', '000');
    Conductores[1] = new Conductor('Iker', '111');
    Conductores[2] = new Conductor('Dani', '333');
    Conductores[3] = new Conductor('Alex', '444');

    
    let Autobus1 = new Autobus(50, "7744 JMB", Conductores);


    Autobus1.mostrarDatosAutobus();

    Autobus1.subir(15);
    Autobus1.bajar(20);

    Autobus1.mostrarDatosAutobus();


    let Buscar = Autobus1.buscarConductor("000");
    console.log("\n¿Conductor encontrado? " + (Buscar ? 'Sí' : 'No'));
}
main();