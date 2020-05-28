package com.blog.pojo;

import java.util.Date;

public class View {
    private Integer id;

    private Integer boId;

    private Integer artId;

    private Date vtime;

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

    public Date getVtime() {
        return vtime;
    }

    public void setVtime(Date vtime) {
        this.vtime = vtime;
    }
}