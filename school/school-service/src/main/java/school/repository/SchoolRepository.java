package school.repository;

import school.model.School;
import org.springframework.data.repository.query.ReactiveQueryByExampleExecutor;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;

import java.util.UUID;

public interface SchoolRepository extends ReactiveSortingRepository<School, UUID>, ReactiveQueryByExampleExecutor<School> {
}
