# 😻Cats Love App

<p align="left">
  <img height="200" src="./cat.png" />
</p>

## 📝Descripción:

<p>En este proyecto se desarrolló una SPA (Single Page Application), en la cual se pueden ver diversa cantidad de gatos en adopción, para que así se puedan contactar con quien los tiene y les puedan dar un hogar. Los mismos son posteados por las personas que los encuentren y que no puedan tenerlos con ellos o cuidarlos. La misma tiene funcionalidades tales como filtrar/ordenar gatos por ciudad, paginado para poder ver 10 gatos por página y formulario para postear gatos para ser adoptados.
</p>

#### Funcionalidades

__Pagina inicial__- Landing page con:
- [ ] Imagen de fondo representativa del proyecto.
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__- Contiene:
- [ ] Área donde se verá el listado de gatos con su imagen, nombre, edad y ciudad.
- [ ] Botones/Opciones para filtrar por ciudad.
- [ ] Botones/Opciones para ordenar tanto ascendente como descendentemente los gatos por orden alfabético.
- [ ] Paginado para ir buscando y mostrando los siguientes gatos, 8 gatos por pagina.

__Ruta de detalle de gato__- Contiene:
- [ ] Los campos mostrados en la ruta principal para cada gato (imagen, nombre, edad y ciudad)
- [ ] Descripción.
- [ ] Teléfono.
- [ ] Altura.
- [ ] Peso.

__Ruta de posteo de gato en adopción__- Contiene:
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Edad
  - Sexo
  - Descripción
  - Teléfono
  - Altura
  - Ciudad
  - Imagen
- [ ] Botón/Opción para postear un nuevo gato.


## 🚀Para poder iniciar el proyecto en su navegador:

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar


__🚨IMPORTANTE:🚨__ Es necesario contar mínimamente con la última versión estable de Node y NPM. Asegurese de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.


Actualmente (Agosto 2022) las versiónes necesarias son:

 * __Node__: 16.15.1 o mayor
 * __NPM__: 8.11.0 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v


#### Tecnologías usadas:
- [ ] Bootstrap
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - MySQL



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Deberá mostrar su:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Botones/Opciones para filtrar por:
  - Temperamento
  - Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
  - Orden alfabético
  - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.

__IMPORTANTE__: Dentro de la Ruta Principal se deben mostrar tanto las razas de perros traidas desde la API como así también las de la base de datos, pero NO está permitido almacenar en la base de datos las razas de perros de la API sino que solamente se pueden guardar aquellas creadas desde el form.

__Ruta de detalle de gato__: debe contener

- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de gato__: debe contener

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [ ] Botón/Opción para publicar un nuevo gato
