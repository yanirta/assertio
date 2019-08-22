# assertio ;) - make testing visible (concept version)
assertio is a visibility framework that built to make testing more tracable with built in benefits.

Out of the box key features:
- Collect & trace historic tests executions.
- Display reports on tests performance and execution.
- Unify reporting from multiple nodes and projects.
- Multi language * framework * platform support (currently Java & JavaScript).
- Supports regression testing, pass or fail tests based on previous values.
- Central point of evaluation.
- Realtime indication on test execution.

## __The dashboard__
assertio dashboard is the central location to see all the test executions and their results.
- Starting from the tests list on the left-hand side, the dashboard reflects historically how the test was stable and succeeding.
- Selecting one of the tests will reveal a list of individual executions, when diving into one of them will show all the available data from that point in time.
<img width="auto" alt="Screen Shot 2019-08-22 at 23 30 52" src="https://user-images.githubusercontent.com/6667420/63547716-67fbbb00-c535-11e9-8cff-32d3739c8076.png">

The components:
- assertio server - Collects the data, report, further analysis & processing.
- assertio client libraries - assertio-sdk to send the test-data.

#### Disclaimer
This is a minimal version to demonstrate the concept.
Components and api's are subject to changes.

## [__The server__](./server)
- Requirements
  - python 3.7 and above (other versions just weren't tested)
  - pip libraries: flask, flask_cors, connexion, and tinydb
  - nodeJS v12.6.0 (and above) with npm
- preparing
  - clone the server folder (or the entire project)
  - in terminal (or cmd console) go to 'server/webapp' folder (`cd server/webapp`)
    - run `npm i`
    - run `npm run build`
- Starting
  - in the 'server' folder (terminal or console) run `python -m core`.
-  Validation
   - web interface: head to http://localhost:8080 (https isn't supported yet).
  Note that before running any validations with one of the client libraries, a blank page will be displayed (my bad, TBD)
   - api interface: head to http://localhost:8080/api/0.0.1/ui swagger interface will be displayed.



## [__Client libraries__](./clients)
- Java - in new or existing project
  - installation (using maven)
    - insert the following dependency in `project/dependencies` section of your `pom.xml` file:
    ```
    <dependency>
        <groupId>com.github.yanirta</groupId>
        <artifactId>assertio-java-client</artifactId>
        <version>RELEASE</version>
    </dependency>
    ```

  - usage 
    - create a new file 'assertioWelcomeTest.java' in your 'src/java/test/' folder and insert the following code:
    ```java
    import io.assertio.assertio;
    import org.junit.Test;

    public class assertioTest {
        @Test
        public void assertBasics() {
            assertio assertion = new assertio("http://localhost:8080/api/0.0.1", "NA");
            assertion.assertEquals(5, 1 + 4, "My first assertio validation test");
        }
    }
    ```
    - run your code thorugh console/terminal via the command 'mvn test'
- JavaScript - in new or existing project
  - installation (using npm):
    - in your project-root library console/terminal run `npm i assertio-js-client`
  - usage
    - create a new file 'assertioWelcomeTest.js' in your 'src/java/test/' folder and insert the following code::
    ```JavaScript
    var assertio = require('assertio-js-client').default;

    describe("my first assertio test", () => {
        var client = new assertio("NA", "http://localhost:8080/api/0.0.1");

        it("making my first test", () => {
            return client.assertEquals(5, 2 + 3, "My first assertio validation");
        });
    })
    ```

## [__The api__](./api)
The api and the lower level of both the server and the clients were built with swagger/openapi using
[openapi generatior](https://github.com/OpenAPITools/openapi-generator).
In order to communicate directy with the api you can go to http://localhost:8080/api/0.0.1/ui after starting the server.

## License
MIT