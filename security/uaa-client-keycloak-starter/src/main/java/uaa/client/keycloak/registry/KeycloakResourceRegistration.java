package uaa.client.keycloak.registry;

import lombok.extern.slf4j.Slf4j;
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.util.Assert;
import uaa.client.registry.HealthCheckHandler;
import uaa.client.registry.Registration;

@Slf4j
public class KeycloakResourceRegistration implements Registration {
    private final ObjectProvider<HealthCheckHandler> healthCheckHandler;
    private final Configuration keycloakClientConfiguration;
    private AuthzClient authzClient;
    private String appName;

    public KeycloakResourceRegistration(AuthzClient authzClient, ObjectProvider<HealthCheckHandler> healthCheckHandler, Configuration keycloakConfig) {
        this.authzClient = authzClient;
        this.healthCheckHandler = healthCheckHandler;
        this.keycloakClientConfiguration = keycloakConfig;
    }

    public static Builder builder() {
        return new Builder();
    }

    private static AuthzClient buildAuthzClient(AuthzClient authzClient, Configuration keycloakConfig) {
        if (authzClient == null) {
            Assert.notNull(keycloakConfig, "if authzClient is null, [" + Configuration.class.getName() + "] may not be null");
            try {
                return AuthzClient.create(keycloakConfig);
            } catch (Exception ex) {
                log.warn("Unable to create keycloak authz client [{}]", ex.getMessage());
            }
        }
        return authzClient;
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

    public void retryToBuildKeycloakClient() {
        this.authzClient = buildAuthzClient(authzClient, keycloakClientConfiguration);
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
            return new KeycloakResourceRegistration(buildAuthzClient(authzClient, this.keycloakConfig),
                    healthCheckHandler, keycloakConfig);
        }

    }
}
