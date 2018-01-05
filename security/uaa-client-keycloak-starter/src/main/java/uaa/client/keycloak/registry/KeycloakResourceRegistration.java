package uaa.client.keycloak.registry;

import lombok.extern.slf4j.Slf4j;
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.retry.support.RetryTemplate;
import org.springframework.util.Assert;
import uaa.client.registry.Registration;

@Slf4j
public class KeycloakResourceRegistration implements Registration {
    private final ObjectProvider<EndpointResourceFinder> resourceFinder;
    private final Configuration keycloakClientConfiguration;
    private AuthzClient authzClient;
    private String appName;
    private RetryTemplate retryTemplate;

    public KeycloakResourceRegistration(AuthzClient authzClient,
                                        ObjectProvider<EndpointResourceFinder> resourceFinder,
                                        Configuration keycloakConfig,
                                        RetryTemplate retryTemplate) {
        this.resourceFinder = resourceFinder;
        this.authzClient = authzClient;
        this.keycloakClientConfiguration = keycloakConfig;
        this.retryTemplate = retryTemplate;
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

    public ObjectProvider<EndpointResourceFinder> getResourceFinder() {
        return resourceFinder;
    }

    public RetryTemplate getRetryTemplate() {
        return retryTemplate;
    }

    public void retryToBuildKeycloakClient() {
        this.authzClient = buildAuthzClient(authzClient, keycloakClientConfiguration);
    }

    @Slf4j
    public static class Builder {
        private AuthzClient authzClient;
        private ObjectProvider<EndpointResourceFinder> resourceFinder;
        private Configuration keycloakConfig;
        private RetryTemplate retryTemplate;

        public Builder with(AuthzClient authzClient) {
            this.authzClient = authzClient;
            return this;
        }

        public Builder with(RetryTemplate retryTemplate) {
            this.retryTemplate = retryTemplate;
            return this;
        }

        public Builder with(ObjectProvider<EndpointResourceFinder> resourceFinder) {
            this.resourceFinder = resourceFinder;
            return this;
        }

        public Builder with(Configuration keycloakConfig) {
            this.keycloakConfig = keycloakConfig;
            return this;
        }

        public KeycloakResourceRegistration build() {
            return new KeycloakResourceRegistration(buildAuthzClient(this.authzClient, this.keycloakConfig),
                    this.resourceFinder, this.keycloakConfig, this.retryTemplate);
        }

    }
}
