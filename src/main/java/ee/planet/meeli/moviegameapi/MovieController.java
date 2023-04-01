package ee.planet.meeli.moviegameapi;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/movies/picked")
    public List<Movie> getTwoMovies() {
        return service.getTwoMovies();
    }

    @GetMapping("/movies/random")
    public Movie getOneMovie() {
        return service.getOneMovie();
    }

}
