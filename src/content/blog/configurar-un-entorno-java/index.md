---
title: "Como configurar un entorno Java"
description: "Guía completa para configurar tu entorno de desarrollo Java. Desde la instalación del JDK hasta la creación de proyectos avanzados, aquí encontrarás todo lo que necesitas para comenzar a programar en Java."
date: "2024-08-21"
draft: true
---

## Configurar un entorno de desarrollo en Linux y Mac
### Instalar SDKMAN!

SDKMAN! es una herramienta que permite instalar, actualizar y usar diferentes versiones de un mismo SDK u otras herramientas como Maven o Gradle de forma sencilla, directamente desde la línea de comandos.

Para instalarlo, abrimos una terminal y corremos el siguiente comando

```bash
curl -s "https://get.sdkman.io" | bash
```

Seguimos las instrucciones y al finalizar, para activar la herramienta, podemos abrir una nueva terminal o correr siguiente comando en la misma terminal:

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

Finalmente, corremos el siguiente comando para verificar que la instalación finalizó correctamente:

```bash
sdk version
```
Deberiamos ver un mensaje similar al siguiente en la consola:

```
SDKMAN!
script: 5.18.2
native: 0.4.6
```

Para mas informacion podemos chequear la [documentación oficial](https://sdkman.io/). 

---

### Instalar Java

Con SDKMAN! instalado, podemos comenzar a instalar el JDK (Java Development Kit). El JDK es un conjunto de herramientas para crear aplicaciones en Java.
Incluye el compilador, la maquina virtual de Java (JVM) y la biblioteca de standard de Java ()

Para hacerlo, debemos ejecutar el siguiente comando. 

```bash
sdk install java
```
Esto va a instalarnos la ultima version estable del JDK. SDKMAN! Se va a encargar de configurar todo por nosotros.
Para verificar que todo funciona correctamente podemos usar el comando

```bash
java -version
```

y ver que obtenemos un output similar al siguiente en la consola

```
openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment GraalVM CE 21.0.2+13.1 (build 21.0.2+13-jvmci-23.1-b30)
OpenJDK 64-Bit Server VM GraalVM CE 21.0.2+13.1 (build 21.0.2+13-jvmci-23.1-b30, mixed mode, sharing)
```
---

### Instalar Maven

Al igual que instalamos Java. Podemos instalar Maven usando SDKMAN!.
Maven es una herramienta que vamos a utilizar para construir y administrar nuestros proyectos Java.
Con maven vamos a gestionar las dependencias nuestros proyectos, compilar, ejecutar los tests y empaqutar nuestras aplicaciones (crear los archivos ejecutables .jar).

Para hacerlo, debemos ejecutar el siguiente comando. 

```bash
sdk install maven
```

Esto va a instalarnos la ultima version estable de Maven. SDKMAN!, de nuevo, va a configurar Maven y utilizar la version de Java que hayamos instalado previamente.
Para verificar que la instalación fue correcta, podemos utilizar el comando 

```bash
mvn -v
```

Este deberia devolvernos una salida por consola similar a esto

```
Apache Maven 3.9.8 (36645f6c9b5079805ea5009217e36f2cffd34256)
Maven home: /Users/user/.sdkman/candidates/maven/current
Java version: 21.0.2, vendor: GraalVM Community, runtime: /Users/user/.sdkman/candidates/java/21.0.2-graalce
```

---

## Configurar un entorno de desarrollo Java en Windows

### Instalar Java

TBD

### Instalar Maven

TBD
```