FROM openjdk:11.0-oracle
ADD ./target/musixApplication-0.0.1-SNAPSHOT.jar /usr/src/musixApplication-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar","musixApplication-0.0.1-SNAPSHOT.jar"]