package com.stackroute.controller;

import com.stackroute.domain.Track;
import com.stackroute.exceptions.SameTrackCommentsException;
import com.stackroute.exceptions.TrackAlreadyExistsException;
import com.stackroute.exceptions.TrackNotFoundException;
import com.stackroute.service.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/v1/")
public class TrackController {

    private ResponseEntity <?>responseEntity = null;
    private TrackService trackService;
    @Autowired
    public TrackController(TrackService trackService) {
        this.trackService = trackService;
    }

//    @RequestMapping(value = "track", method = RequestMethod.POST)
    @PostMapping(value = "track")
    public ResponseEntity<?> addTrack(@RequestBody Track track) throws TrackAlreadyExistsException, Exception{

//        try {
            Track track1 = trackService.saveTrack(track);
            responseEntity= new ResponseEntity<Track>(track1, HttpStatus.CREATED);
//        }catch (TrackAlreadyExistsException trackAlreadyExistsException){
//            responseEntity =  new ResponseEntity<>(trackAlreadyExistsException.getMessage(), HttpStatus.CONFLICT);
//        }catch(Exception exception){
//            responseEntity = new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }
//    @RequestMapping(value = "tracks", method = RequestMethod.GET)
    @GetMapping(value = "tracks")
    public ResponseEntity<?> getAllTracks() throws Exception{
//        try {
            List<Track> tracks = trackService.getAllTracks();
            responseEntity = new ResponseEntity<List<Track>>(tracks, HttpStatus.OK);
//        }catch (Exception exception){
//            responseEntity = new ResponseEntity<>(exception.getMessage(), HttpStatus.CONFLICT);
//        }
        return responseEntity;
    }
//    @RequestMapping(value = "track/{id}", method = RequestMethod.DELETE)
    @DeleteMapping(value = "track/{id}")
    public ResponseEntity<?> deleteTrackById(@PathVariable(value = "id") String id) throws TrackNotFoundException, Exception{

//        try {
            Track track = (Track) trackService.deleteTrackById(id);
            responseEntity = new ResponseEntity<Track>(track,HttpStatus.OK);
//        }
//        catch (TrackNotFoundException trackNotFoundException){
//            responseEntity = new ResponseEntity<>(trackNotFoundException.getMessage(),HttpStatus.CONFLICT);
//
//        }
//        catch (Exception exception){
//            responseEntity = new ResponseEntity<>(exception.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }
//    @RequestMapping(value = "track/{id}/{comments}", method = RequestMethod.PUT)
    @PutMapping(value = "track/{id}/{comments}")
    public ResponseEntity<?> updateTrack(@PathVariable(value ="id") String id, @PathVariable(value = "comments") String comments) throws TrackNotFoundException, SameTrackCommentsException, Exception{
//        try{
            Track track1 = (Track) trackService.updateTrack(id,comments);
            responseEntity = new ResponseEntity<Track>(track1, HttpStatus.OK);
//        }catch (TrackNotFoundException trackNotFoundException){
//            responseEntity = new ResponseEntity<>(null,null, HttpStatus.CONFLICT);
//        } catch (SameTrackCommentsException sameTrackCommentsException){
//            responseEntity = new ResponseEntity<>(null,null, HttpStatus.CONFLICT);
//        }
//        catch (Exception exception){
//            responseEntity = new ResponseEntity<>(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//        }
        return responseEntity;
    }
    @GetMapping(value = "track/{name}")
    public ResponseEntity<?> findByTrackName(@PathVariable(value = "name") String name) throws Exception{
//        try {
            Track track1 = trackService.findByTrackName(name);
            responseEntity = new ResponseEntity<Track>(track1, HttpStatus.OK);
//        }catch (Exception exception){
//            responseEntity = new ResponseEntity<>(exception.getMessage(), HttpStatus.CONFLICT);
//        }
        return responseEntity;
    }
}
