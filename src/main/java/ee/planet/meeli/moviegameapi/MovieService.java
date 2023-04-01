package ee.planet.meeli.moviegameapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public Page<Movie> getMovies(@RequestParam int page, @RequestParam int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return repository.findAll(pageRequest);
    }

    // get 2 random movies from the database
    public List<Movie> getTwoMovies() {
        List<Movie> movies = new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            int randomId = (int) (Math.random() * repository.count());
            movies.add(repository.findById(BigInteger.valueOf((long) randomId)).get());
        }
        return movies;
    }

    // get 1 random movie from the database
    public Movie getOneMovie() {
        int randomId = (int) (Math.random() * repository.count());
        return repository.findById(BigInteger.valueOf((long) randomId)).get();
    }

}
