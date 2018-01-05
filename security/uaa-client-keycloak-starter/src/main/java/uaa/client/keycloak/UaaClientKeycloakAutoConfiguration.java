package uaa.client.keycloak;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import uaa.client.keycloak.config.UaaClientKeycloakConfiguration;
import uaa.client.keycloak.registry.*;

import java.util.HashMap;

@Configuration
@EnableConfigurationProperties({UaaClientKeycloakConfiguration.class, AutoResourceRegistrationProperties.class})
@AutoConfigureAfter(WebMvcAutoConfiguration.class)
public class UaaClientKeycloakAutoConfiguration {

    private static final String CRYPTO_SECRET = "secret";

    @Bean
    public KeycloakResourceRegistry keycloakResourceRegistry() {
        return new KeycloakResourceRegistry();
    }

    @ConditionalOnProperty(value = AutoResourceRegistrationProperties.PREFIX_AUTO_RESOURCE_REGISTRATION + ".enabled", matchIfMissing = true)
    protected static class KeycloakAutoResourceRegistrationConfiguration {

        @Bean
        public KeycloakAutoResourceRegistration keycloakAutoResourceRegistration(ApplicationContext context,
                                                                                 KeycloakResourceRegistry registry,
                                                                                 KeycloakResourceRegistration registration) {
            return new KeycloakAutoResourceRegistration(context, registry, registration);
        }

        @Bean
        public KeycloakResourceRegistration keycloakResourceRegistration(ObjectProvider<EndpointResourceFinder> endpointResourceFinder,
                                                                         UaaClientKeycloakConfiguration uaaClientKeycloakConfiguration) {
            org.keycloak.authorization.client.Configuration keycloakConfig
                    = new org.keycloak.authorization.client.Configuration(uaaClientKeycloakConfiguration.getAuthServerUrl(),
                    uaaClientKeycloakConfiguration.getRealm(), uaaClientKeycloakConfiguration.getClient(),
                    new HashMap<String, Object>() {{
                        put(CRYPTO_SECRET, uaaClientKeycloakConfiguration.getClientSecret());
                    }}, null);
            return KeycloakResourceRegistration.builder()
                    .with(keycloakConfig)
                    .with(endpointResourceFinder)
                    .build();
        }

    }

}
