package school.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.UUID;


@Data
public class School {

    @Id
    private UUID id;

}
