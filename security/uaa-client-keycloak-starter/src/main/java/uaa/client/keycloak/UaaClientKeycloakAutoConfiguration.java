package uaa.client.keycloak;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import uaa.client.keycloak.config.UaaClientConfiguration;

@Configuration
@EnableConfigurationProperties(UaaClientConfiguration.class)
public class UaaClientKeycloakAutoConfiguration {
}
