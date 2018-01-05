package uaa.client.keycloak.registry;

import lombok.extern.slf4j.Slf4j;
import uaa.client.registry.HealthCheckHandler;
import uaa.client.registry.InstanceStatus;
import uaa.client.registry.ResourceRegistry;

import java.io.Closeable;

@Slf4j
public class KeycloakResourceRegistry implements ResourceRegistry<KeycloakResourceRegistration>, Closeable {

    @Override
    public void register(KeycloakResourceRegistration reg) {
        if (log.isInfoEnabled()) {
            log.info("Registering application " + reg.getAppName()
                    + " with keycloak");
        }
        registerResources(reg.getHealthCheckHandler().getIfAvailable(), reg);
    }

    private void registerResources(HealthCheckHandler healthCheckHandler, KeycloakResourceRegistration reg) {
        if (InstanceStatus.UP.equals(healthCheckHandler.getStatus(null))) {

        }
    }

    @Override
    public void deregister(KeycloakResourceRegistration registration) {

    }

    @Override
    public void close() {

    }

}
