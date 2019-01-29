package com.stackroute.configuration;

import com.stackroute.domain.Track;
import com.stackroute.repository.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class TrackApplicationRunnerConfiguration implements CommandLineRunner {
    private TrackRepository trackRepository;
    @Autowired
    public TrackApplicationRunnerConfiguration(TrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        seedStart();
    }
    public void seedStart(){
        trackRepository.save(new Track("1","track1","comment1","#"));
        trackRepository.save(new Track("2","track2","comment2", "#"));
    }
}
