package ee.planet.meeli.moviegameapi;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class MovieController {

    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    @GetMapping("/movies")
    public Page<Movie> getMovies(@RequestParam int page, @RequestParam int size) {
        return service.getMovies(page, size);
    }

}
