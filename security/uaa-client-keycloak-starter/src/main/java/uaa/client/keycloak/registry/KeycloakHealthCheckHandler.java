package uaa.client.keycloak.registry;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.actuate.health.CompositeHealthIndicator;
import org.springframework.boot.actuate.health.HealthAggregator;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.boot.actuate.health.Status;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.util.Assert;
import uaa.client.registry.HealthCheckHandler;
import uaa.client.registry.InstanceStatus;

import java.util.HashMap;
import java.util.Map;

public class KeycloakHealthCheckHandler implements HealthCheckHandler, ApplicationContextAware, InitializingBean {

    private static final Map<Status, InstanceStatus> STATUS_MAPPING =
            new HashMap<Status, InstanceStatus>() {{
                put(Status.UNKNOWN, InstanceStatus.UNKNOWN);
                put(Status.OUT_OF_SERVICE, InstanceStatus.OUT_OF_SERVICE);
                put(Status.DOWN, InstanceStatus.DOWN);
                put(Status.UP, InstanceStatus.UP);
            }};

    private final CompositeHealthIndicator healthIndicator;
    private ApplicationContext applicationContext;

    public KeycloakHealthCheckHandler(HealthAggregator healthAggregator) {
        Assert.notNull(healthAggregator, "HealthAggregator must not be null");
        healthIndicator = new CompositeHealthIndicator(healthAggregator);
    }

    @Override
    public InstanceStatus getStatus(InstanceStatus status) {
        return getHealthStatus();
    }

    private InstanceStatus getHealthStatus() {
        final Status status = getHealthIndicator().health().getStatus();
        return mapToInstanceStatus(status);
    }

    private InstanceStatus mapToInstanceStatus(Status status) {
        if (!STATUS_MAPPING.containsKey(status)) {
            return InstanceStatus.UNKNOWN;
        }
        return STATUS_MAPPING.get(status);
    }

    public CompositeHealthIndicator getHealthIndicator() {
        return healthIndicator;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }


    @Override
    public void afterPropertiesSet() {
        final Map<String, HealthIndicator> healthIndicators = applicationContext.getBeansOfType(HealthIndicator.class);
        for (Map.Entry<String, HealthIndicator> entry : healthIndicators.entrySet()) {
            healthIndicator.addHealthIndicator(entry.getKey(), entry.getValue());
        }
    }
}
