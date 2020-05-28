package com.blog.pojo;

public class Imgpool {
    private Integer imgId;

    private Integer arid;

    private String imageurl;

    public Integer getImgId() {
        return imgId;
    }

    public void setImgId(Integer imgId) {
        this.imgId = imgId;
    }

    public Integer getArid() {
        return arid;
    }

    public void setArid(Integer arid) {
        this.arid = arid;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl == null ? null : imageurl.trim();
    }
}