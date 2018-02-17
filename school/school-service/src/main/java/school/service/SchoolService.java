package school.service;

import school.model.School;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

public interface SchoolService {
    Mono<School> findOne(UUID uuid);

    Mono<School> save(School school);

    Flux<School> findPostsStartingWith(String letter);

    Flux<School> findAll();
}
