package school.service;

import school.model.School;
import school.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Component
public class SchoolServiceImpl implements SchoolService {

    @Autowired
    private SchoolRepository schoolRepository;

    @Override
    public Mono<School> findOne(UUID uuid) {
        return schoolRepository.findById(uuid);
    }

    @Override
    public Mono<School> save(School school) {
        school.setId(UUID.randomUUID());
        return schoolRepository.save(school);
    }

    @Override
    public Flux<School> findPostsStartingWith(String letter) {
        return schoolRepository.findAll();
    }

    @Override
    public Flux<School> findAll() {
        return schoolRepository.findAll();
    }
}
