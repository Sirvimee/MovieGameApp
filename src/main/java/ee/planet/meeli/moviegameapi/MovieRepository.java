package ee.planet.meeli.moviegameapi;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface MovieRepository extends JpaRepository<Movie, BigInteger> {

}

