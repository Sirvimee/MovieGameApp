package ee.planet.meeli.moviegameapi;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigInteger;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private BigInteger id;
    private String originalTitle;
    private String overview;
    private Float popularity;
    private Date releaseDate;
    private BigInteger revenue;
    private Float runtime;
    private String tagline;
    private String title;
    private Float voteAverage;
    private Integer voteCount;

}
