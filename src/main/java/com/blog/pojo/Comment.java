package com.blog.pojo;

import java.util.Date;

public class Comment {
    private Integer id;

    private Integer commentUid;

    private Integer commentBoid;

    private Integer commentArid;

    private String commentcontext;

    private Date commenttime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCommentUid() {
        return commentUid;
    }

    public void setCommentUid(Integer commentUid) {
        this.commentUid = commentUid;
    }

    public Integer getCommentBoid() {
        return commentBoid;
    }

    public void setCommentBoid(Integer commentBoid) {
        this.commentBoid = commentBoid;
    }

    public Integer getCommentArid() {
        return commentArid;
    }

    public void setCommentArid(Integer commentArid) {
        this.commentArid = commentArid;
    }

    public String getCommentcontext() {
        return commentcontext;
    }

    public void setCommentcontext(String commentcontext) {
        this.commentcontext = commentcontext == null ? null : commentcontext.trim();
    }

    public Date getCommenttime() {
        return commenttime;
    }

    public void setCommenttime(Date commenttime) {
        this.commenttime = commenttime;
    }
}