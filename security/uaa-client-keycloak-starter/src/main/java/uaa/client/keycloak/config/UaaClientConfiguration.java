package uaa.client.keycloak.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

@ConfigurationProperties(prefix = "xcs.uaa.keycloak.client")
@Validated
@Getter
@Setter
public class UaaClientConfiguration {

}
