package uaa.client.keycloak.registry;

import lombok.extern.slf4j.Slf4j;
import org.springframework.retry.RetryCallback;
import uaa.client.registry.ResourceRegistry;

import java.io.Closeable;

@Slf4j
public class KeycloakResourceRegistry implements ResourceRegistry<KeycloakResourceRegistration>, Closeable {

    @Override
    public void register(KeycloakResourceRegistration reg) {
        maybeInitializeClient(reg);
        if (log.isInfoEnabled()) {
            log.info("Registering application " + reg.getAppName()
                    + " with keycloak");
        }
        registerResources(reg.getResourceFinder().getIfAvailable(), reg);
    }

    private void maybeInitializeClient(KeycloakResourceRegistration reg) {
        if (reg.getKeycloakClient() == null)
            reg.retryToBuildKeycloakClient();
    }

    private void registerResources(final EndpointResourceFinder endpointResourceFinder, final KeycloakResourceRegistration reg) {
        reg.getRetryTemplate().execute((RetryCallback<Void, ResourceRegistrationException>) context -> {
            log.info("calling retry callback");
            if (reg.getKeycloakClient() != null) {
                endpointResourceFinder.findAll().forEach(s -> {

                });
            } else
                maybeInitializeClient(reg);
            return null;
        }, context -> {
            log.info("calling recovery callback");
            return null;
        });
    }

    @Override
    public void deregister(KeycloakResourceRegistration registration) {

    }

    @Override
    public void close() {

    }

}
