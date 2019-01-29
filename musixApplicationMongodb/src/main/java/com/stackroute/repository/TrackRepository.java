package com.stackroute.repository;

import com.stackroute.domain.Track;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TrackRepository extends MongoRepository<Track, String> {
    @Query
    public Track findByTrackName(String trackName);
}
