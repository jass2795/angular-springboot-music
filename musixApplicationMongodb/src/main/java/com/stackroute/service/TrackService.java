package com.stackroute.service;

import com.stackroute.domain.Track;
import com.stackroute.exceptions.SameTrackCommentsException;
import com.stackroute.exceptions.TrackAlreadyExistsException;
import com.stackroute.exceptions.TrackNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface TrackService {
    public Track saveTrack(Track track) throws TrackAlreadyExistsException;
    public List<Track> getAllTracks() throws Exception;
    public Track deleteTrackById(String id) throws TrackNotFoundException;
    public Track updateTrack(String id, String comments) throws TrackNotFoundException, SameTrackCommentsException;
    public Track findByTrackName(String name);
}
