package uaa.client.keycloak.registry;

import lombok.extern.slf4j.Slf4j;
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.util.Assert;
import uaa.client.registry.HealthCheckHandler;
import uaa.client.registry.Registration;

public class KeycloakResourceRegistration implements Registration {
    private final AuthzClient authzClient;
    private final ObjectProvider<HealthCheckHandler> healthCheckHandler;
    private String appName;

    public KeycloakResourceRegistration(AuthzClient authzClient, ObjectProvider<HealthCheckHandler> healthCheckHandler) {
        this.authzClient = authzClient;
        this.healthCheckHandler = healthCheckHandler;
    }

    public static Builder builder() {
        return new Builder();
    }

    public AuthzClient getKeycloakClient() {
        return authzClient;
    }

    public String getAppName() {
        return this.appName;
    }

    public ObjectProvider<HealthCheckHandler> getHealthCheckHandler() {
        return healthCheckHandler;
    }

    @Slf4j
    public static class Builder {
        private AuthzClient authzClient;
        private ObjectProvider<HealthCheckHandler> healthCheckHandler;
        private Configuration keycloakConfig;

        public Builder with(AuthzClient authzClient) {
            this.authzClient = authzClient;
            return this;
        }

        public Builder with(ObjectProvider<HealthCheckHandler> healthCheckHandler) {
            this.healthCheckHandler = healthCheckHandler;
            return this;
        }

        public Builder with(Configuration keycloakConfig) {
            this.keycloakConfig = keycloakConfig;
            return this;
        }

        public KeycloakResourceRegistration build() {
            if (this.authzClient == null) {
                Assert.notNull(this.keycloakConfig, "if authzClient is null, [" + Configuration.class.getName() + "] may not be null");
                try {
                    this.authzClient = AuthzClient.create(keycloakConfig);
                } catch (Exception ex) {
                    log.warn(ex.getMessage());
                }
            }
            return new KeycloakResourceRegistration(authzClient, healthCheckHandler);
        }

    }
}
