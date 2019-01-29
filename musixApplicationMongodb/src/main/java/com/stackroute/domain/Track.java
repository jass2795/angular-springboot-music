package com.stackroute.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "Track")
@Data
@AllArgsConstructor
public class Track {
    @Id
    private String trackId;
    @Field
    private String trackName;
    @Field
    private String trackComments;
    @Field
    private String trackUrl;

//    public int getTrackId() {
//        return trackId;
//    }
//
//    public void setTrackId(int trackId) {
//        this.trackId = trackId;
//    }
//
//    public String getTrackName() {
//        return trackName;
//    }
//
//    public void setTrackName(String trackName) {
//        this.trackName = trackName;
//    }
//
//    public String getTrackComments() {
//        return trackComments;
//    }
//
//    public void setTrackComments(String trackComments) {
//        this.trackComments = trackComments;
//    }
//
//    @Override
//    public String toString() {
//        return "Track{" +
//                "trackId=" + trackId +
//                ", trackName='" + trackName + '\'' +
//                ", trackComments='" + trackComments + '\'' +
//                '}';
//    }
}
