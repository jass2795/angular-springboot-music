package com.stackroute.service;

import com.stackroute.domain.Track;
import com.stackroute.exceptions.SameTrackCommentsException;
import com.stackroute.exceptions.TrackAlreadyExistsException;
import com.stackroute.exceptions.TrackNotFoundException;
import com.stackroute.repository.TrackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrackServiceImplementation implements TrackService {

    private TrackRepository trackRepository;

    @Autowired
    public TrackServiceImplementation(TrackRepository trackRepository) {
        this.trackRepository = trackRepository;
    }

    @Override
    public Track saveTrack(Track track) throws TrackAlreadyExistsException {
        Optional<Track> fetchedtrack = trackRepository.findById(track.getTrackId());
       // Track track1 = null;
        if(fetchedtrack.isPresent()){
            throw new TrackAlreadyExistsException("Track already exists");
        }
        else
        {
            return trackRepository.save(track);
        }
    }

    @Override
    public List<Track> getAllTracks() throws Exception {
        List<Track> trackList = (List<Track>) trackRepository.findAll();
        return trackList;
    }

    @Override
    public Track deleteTrackById(String id) throws TrackNotFoundException{
        Optional<Track> track = trackRepository.findById(id);
        if(track.isPresent()) {
            trackRepository.deleteById(id);
        }
        else {
            throw new TrackNotFoundException("Track not found");
        }
        return track.get();
    }
    @Override
    public Track updateTrack(String id, String comments) throws TrackNotFoundException, SameTrackCommentsException {
        Track track = trackRepository.findById(id).get();
        Track track1;
        if(!trackRepository.existsById(id)){
            throw new TrackNotFoundException("Track not found");
        }
        else if (comments.equals(track.getTrackComments())) {
                throw new SameTrackCommentsException("Same track comments");
        }
        else {
            track.setTrackComments(comments);
            track1 = trackRepository.save(track);
        }
        return track1;
    }
    @Override
    public Track findByTrackName(String trackName){
        Track track1 = trackRepository.findByTrackName(trackName);
        return track1;
    }
}
