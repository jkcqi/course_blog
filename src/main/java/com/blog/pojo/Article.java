package com.blog.pojo;

import java.util.Date;

public class Article {
    private Integer id;

    private Integer articleBoid;

    private String articletitle;

    private String articleabstract;

    private String ariticlecontext;

    private Date createtime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getArticleBoid() {
        return articleBoid;
    }

    public void setArticleBoid(Integer articleBoid) {
        this.articleBoid = articleBoid;
    }

    public String getArticletitle() {
        return articletitle;
    }

    public void setArticletitle(String articletitle) {
        this.articletitle = articletitle == null ? null : articletitle.trim();
    }

    public String getArticleabstract() {
        return articleabstract;
    }

    public void setArticleabstract(String articleabstract) {
        this.articleabstract = articleabstract == null ? null : articleabstract.trim();
    }

    public String getAriticlecontext() {
        return ariticlecontext;
    }

    public void setAriticlecontext(String ariticlecontext) {
        this.ariticlecontext = ariticlecontext == null ? null : ariticlecontext.trim();
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }
}