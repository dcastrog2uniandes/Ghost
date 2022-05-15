# Pruebas E2E
- Aplicación bajo pruebas: Ghost
- API's de automatización: Kraken y Cypress
- Pruebas VRT: ResembleJS

## Escenarios bajo prueba
| Escenario | Descricpicón | VRT |
|:------------:|:-------------|:-------------|
| 1         | Hacer login, crear un nuevo miembro, ir al listado de miembros, seleccionarlo del listado y eliminarlo     |  Sí       |
| 2         | Hacer login, ir al perfil, modificar los datos, guardar y verificar los cambios desde el listado de miembros     | No        |
| 3         | Hacer login, crear nueva pagina, ir al listado de paginas, seleccionarla y eliminarla.|Sí|
| 4         | Hacer login, ir a listado de tags, crer uno nuevo, ver que aparezca en el listado y seleccionarlo para ver el detalle.|Sí|
| 5         | Hacer login, ir a configuración, ajustes generales y cambiar el tema del sitio. Ir a la pagina principal para ver el cambio. |No|
| 6         | Hacer login, ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts |Sí|
| 7         | Hacer login, ingresar con cuenta válida, Listar Posts, Delete Post, Listar Posts |Sí|
| 8         | Hacer login, Ingresar con cuenta válida, Listar Posts, Editar Post, Listar Posts |Sí|
| 9         | Hacer login, Ingresar con cuenta válida, Listar Posts, Crear Post, Listar Posts |No|
| 10         | Hacer login, ingresar con cuenta válida, Listar Posts, Delete Post, Listar Posts |No|
| 11         |  ||
## Generar reportes RTV

En primer lugar se deben instalar las dos versiones de Ghost. Una opción es instalar en su equipo local las dos images Docker, una por cada versión.

## Instalación de Docker

1. Para instalar Docker, descargue el ejecutable desde la página oficial y siga las instrucciones de acuerdo a su sistema operativo:

**Windows:** https://docs.docker.com/desktop/windows/install/ <br>
**Linux:**   https://docs.docker.com/desktop/linux/install/ <br>
**Mac:**     https://docs.docker.com/desktop/mac/install/

2. Una vez instalado Docker Desktop, cree una carpeta e incluya un archivo llamado docker-compose.yaml con el siguiente código:

```
version: "3.9"
services:
  ghostv43:
    image: ghost:4.35
    volumes:
      - ./g3:/var/lib/ghost/content
    restart: always  
    ports:
    - 3001:2368
    expose:
      - 3001
      
  ghostv44:
    image: ghost:4.44.0
    volumes:
      - ./g4:/var/lib/ghost/content
    restart: always  
    ports:
    - 3002:2368
    expose:
      - 3002
```

3. Verifique en Docker Desktop que se haya creado un contenedor con las dos instancias de Ghost y que estén corriendo en puertos diferentes.

![image](https://user-images.githubusercontent.com/99267339/168453377-79e8e25a-3097-45c7-bd73-58e99d0687f8.png)

 4. Compruebe en su navegador la correcta ejecución de ambas instancias:<br>
    Versión 4.44 = http://localhost:3002/ghost/ <br>
    Versión 4.35 = http://localhost:3001/ghost/
    
 ## Configuración inicial de Ghost
 1. La primera vez que corre Ghost de manera loca, debe crear el usuario administrador. Siga las instrucciones y por favor registre los siguientes datos:<br>
 **email:** ghost_uniandes@uniandes.edu.co <br>
 **contraseña:** PruebasA123
 2. Inicie sesión y compruebe que puede acceder al dashboard de administración, en ambas instancias de Ghost.

## Instalar Node
Para poder instalar las dos API's de automatización que se serán empleadas para ejecutar las pruebas, es necesario que tenga instalado el manejador de dependencias Node JS. Para esto, vaya a la pagina oficial, descarguelo y siuga las instrucciones:<br>
**node:** https://nodejs.org/en/ 

## Instalar Kraken
Kraken es una herramienta de código abierto para realizar pruebas automáticas del tipo E2E con aplicaciones móviles para Android y aplicaciones WEB
1. Para instalar la herramienta, abra una terminal e ingrese el siguiente comando:

```
npm install kraken-node -g
```
2. Una vez tenga en su espacio local el código de este repositorio, desde la carpeta __kraken__ ejecute el siguiente comando para instalar las dependencias necesarias:
```
npm install
```
3. Finalmente, desde la raiz del proyecto, es decir, al nivel del archivo ```package.json``` ejecute el siguiente comando para correr las pruebas:
```
./node_modules/kraken-node/bin/kraken-node run
```
4. En caso de presentar errores, puede consultar la guia de instalación oficial de Kraken en el siguiente enlace: <br>
https://thesoftwaredesignlab.github.io/AutTesingCodelabs/w5/krakenWeb/index.html <br>
4.1. Si llega a presentar un error relacionado con **adb**, por favor haga la instalación como se sugiere en el siguiente vídeo: <br>
https://www.youtube.com/watch?v=tYY7FTV31vM

## Instalar Cypress
Dado que la instalación de Cypress tiene un tamaño significativo, se recomienda que, por lo general, quien vaya a utilizar un proyecto de Cypress cuente con las herramientas de forma global en su máquina. 
1. Ejecute el siguiente comando para instalar Cypress de manera global: <br>
```
npm install -g cypress
```
2. Para ejecutar las pruebas tiene las siguientes dos opciones:<br>
2.1. Modo headless: ingrese a la carpeta **cypress-ghost** y ejecute el siguiente comando: <br>
    ```
    cypress run --headless
    ```
    2.2. Modo aplicación: ejecute el siguiente comando desde cualquier ubicación:<br>
    ```
    cypress open
    ```
    Seleccione la carpeta **cypress-ghost** y vera que se listan todos los escenarios definidos para las pruebas, seleccione el que desea ejecutar

## Ejecución de las pruebas de Regresión Visual

una vez haya clonado este repositorio en su maquina local, ubiquese en la carpeta **RTV_ResembleJS** y ejecute el siguiente comando:

```
node index.js
```

Esto generará el reporte y la comparación de las respectivas imagenes para todos los escenarios definidos.
