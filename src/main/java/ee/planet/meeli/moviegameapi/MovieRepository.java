package ee.planet.meeli.moviegameapi;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface MovieRepository extends PagingAndSortingRepository<Movie, BigInteger> {

}

