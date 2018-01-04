package uaa.client.keycloak;

import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import uaa.keycloak.UaaKeycloakServiceApplication;

@SpringBootTest(classes = UaaKeycloakServiceApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AbstractUaaKeycloakServiceApplication {

    @LocalServerPort
    protected int port;
}
