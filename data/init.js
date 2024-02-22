import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function cargaRoles() {
  const roles = await prisma.roles.createMany({
    data: [ 
      {
        descripcion: 'Administrador',
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        descripcion: 'Médico',
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        descripcion: 'Secretaria',
        usu_creacion: 1,
        fec_creacion: new Date()
      },
    ]
  })
  console.log(roles)
}

async function cargaPermisos() {
  const permisos = await prisma.permisos.createMany({
    data: [ 
      {
        descripcion: 'Permisos de administrador del sistema', 
        usu_creacion: 1,
        fec_creacion: new Date()
      }
    ]
  })
  console.log(permisos)
}

async function cargaRolesPermisos() {
  const rolesPermisos = await prisma.rolesPermisos.createMany({
    data: [ 
      {
        rol_id: 1,
        permiso_id: 1
      }
    ]
  })
  console.log(rolesPermisos)
}

async function cargaUsuarios() {
  const usuarios = await prisma.usuarios.createMany({
    data: [ 
      {
        nombre: 'Homero Zegarra',
        usuario: 'Administrador',
        password: '123456',
        rol_id: 1,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        nombre: 'Harold Durand',
        usuario: 'Administrator',
        password: '123456',
        rol_id: 1,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
    ]
  })
  console.log(usuarios)
}

async function cargaEspecialidad(){
  const especialidad = await prisma.especialidad.createMany({
    data: [
      {
        descripcion: 'Dermatología',
        estado: true,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        descripcion: 'Cardiología',
        estado: true,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        descripcion: 'Medicina interna',
        estado: true,
        usu_creacion: 1,
        fec_creacion: new Date()
      }
    ]
  })
  console.log(especialidad)
}

async function cargaUbigeo(){
  const ubigeo = await prisma.ubigeo.createMany({
    data: [
      {
        ubigeo: 140101,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Lima',
        ubigeo2: 150101,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140102,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Barranco',
        ubigeo2: 150102,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140103,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Chorrillos',
        ubigeo2: 150103,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140104,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Jesús María',
        ubigeo2: 150104,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140105,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'La Molina',
        ubigeo2: 150105,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140106,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'La Victoria',
        ubigeo2: 150106,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140107,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Lince',
        ubigeo2: 150107,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140108,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Magdalena del Mar',
        ubigeo2: 150108,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140109,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Miraflores',
        ubigeo2: 150109,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140110,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Pueblo Libre',
        ubigeo2: 150110,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140111,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'San Borja',
        ubigeo2: 150111,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140112,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'San Isidro',
        ubigeo2: 150112,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140113,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'San Luis',
        ubigeo2: 150113,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140114,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'San Miguel',
        ubigeo2: 150114,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140115,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Santiago de Surco',
        ubigeo2: 150115,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140116,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Surquillo',
        ubigeo2: 150116,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140117,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Villa El Salvador',
        ubigeo2: 150117,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140118,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Villa María del Triunfo',
        ubigeo2: 150118,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140119,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Pucusana',
        ubigeo2: 150119,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140120,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Punta Hermosa',
        ubigeo2: 150120,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140121,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Punta Negra',
        ubigeo2: 150121,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140122,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'San Bartolo',
        ubigeo2: 150122,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140123,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Santa María del Mar',
        ubigeo2: 150123,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140124,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Pachacamac',
        ubigeo2: 150124,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140125,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Cieneguilla',
        ubigeo2: 150125,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140126,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Lurín',
        ubigeo2: 150126,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140127,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Punta Hermosa',
        ubigeo2: 150127,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140128,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Punta Negra',
        ubigeo2: 150128,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140129,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'San Bartolo',
        ubigeo2: 150129,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140130,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Santa María del Mar',
        ubigeo2: 150130,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140131,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Pachacamac',
        ubigeo2: 150131,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140132,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Cieneguilla',
        ubigeo2: 150132,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140133,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Lurín',
        ubigeo2: 150133,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140134,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Pachacamac',
        ubigeo2: 150134,
        usu_creacion: 1,
        fec_creacion: new Date()
      },
      {
        ubigeo: 140135,
        departamento: 'Lima',
        provincia: 'Lima',
        distrito: 'Punta Hermosa',
        ubigeo2: 150135,
        usu_creacion: 1,
        fec_creacion: new Date()
      }
    ]
  })
}


// Función principal para cargar todos los datos iniciales
async function cargarDatosIniciales() {
  await cargaRoles();
  await cargaPermisos();
  await cargaRolesPermisos();
  await cargaUsuarios();
  await cargaUbigeo();
  await cargaEspecialidad();
}


cargarDatosIniciales()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })