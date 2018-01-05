package uaa.client.keycloak.registry;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;

public class KeycloakHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        return Health.unknown().build();
    }

}
