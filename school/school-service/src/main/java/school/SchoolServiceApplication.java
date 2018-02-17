package school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackageClasses = RootPackage.class)
@SpringBootApplication
public class SchoolServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SchoolServiceApplication.class, args);
    }

}
