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

