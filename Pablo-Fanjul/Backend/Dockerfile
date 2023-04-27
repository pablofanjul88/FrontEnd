FROM amazoncorretto:11-alpine-jdk //DE QUE IMAGEN PARTIMOS
MAINTAINER Pablo Fanjul //DUEÑO
COPY target/mgb2-0.0.1-SNAPSHOT.jar pmf-app.jar    //COPIAR EMPAQUETADO A GITHUB
ENTRYPOINT ["java","-jar","pmf-app.jar"]                                         //ES LA INSTRUCCION QUE SE VA A EJECUTAR PRIMERO
