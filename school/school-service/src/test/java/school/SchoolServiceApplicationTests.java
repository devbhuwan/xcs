package school;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = SchoolServiceApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SchoolServiceApplicationTests {

    protected int port;
    protected String authServer;

    @Before
    public void setUp() {
        this.authServer = "http://localhost:" + port + "/auth";
    }

    @Test
    public void contextLoads() {
    }

}
