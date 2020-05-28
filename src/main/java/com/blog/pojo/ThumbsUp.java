package com.blog.pojo;

import java.util.Date;

public class ThumbsUp {
    private Integer id;

    private Integer boId;

    private Integer artId;

    private Date utime;

    private Integer useId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBoId() {
        return boId;
    }

    public void setBoId(Integer boId) {
        this.boId = boId;
    }

    public Integer getArtId() {
        return artId;
    }

    public void setArtId(Integer artId) {
        this.artId = artId;
    }

    public Date getUtime() {
        return utime;
    }

    public void setUtime(Date utime) {
        this.utime = utime;
    }

    public Integer getUseId() {
        return useId;
    }

    public void setUseId(Integer useId) {
        this.useId = useId;
    }
}