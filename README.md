# Getting Started

### Dependency
This application is tested in the following environment.

* jdk (1.8)
* maven (3.5.2)
* npm (6.9.0)
* node (10.16.3)

### Steps to build and run
* unzip grocery-app.zip
* cd grocery-app/src/main/resources/frontend/grocery-client/
* npm install
* cd to the grocery-app folder
* mvn clean
* mvn install
* java -jar target/grocery-app-latest.jar
* http://localhost:8080

### Build Structure
The build structure is as follows:

* pom.xml builds both java source for backend and angular source for frontend.
* Build uses maven plugin to trigger angular cli ng build and copy frontend artifact to static folder.

### Design

#### Frontend:
* Components:
    * Creating grocery item
    * Managing grocery items (Edit/Delete)
    * Search by category
    
* Service:
    * Grocery service to talk to the backend
    
#### Backend
* Controller:
    * Grocery Helper controller serving end points (create/update/delete/read/search).
    
* Service:
    * Grocery Helper service injected into the controller

* Model:
    * Spring boot JpaRepository abstraction layer.
    * Injected into the service layer.
    
* Web server is embedded Apache Tomcat.
* Database is in memory h2 instance.

### Configuration
* Categories can be added to application.properties file present in the codebase.
