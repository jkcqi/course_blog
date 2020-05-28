package com.blog.mapper;

import com.blog.pojo.Article;
import com.blog.pojo.ArticleExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ArticleMapper {
    long countByExample(ArticleExample example);

    int deleteByExample(ArticleExample example);

    int insert(Article record);

    int insertSelective(Article record);

    List<Article> selectByExample(ArticleExample example);

    int updateByExampleSelective(@Param("record") Article record, @Param("example") ArticleExample example);

    int updateByExample(@Param("record") Article record, @Param("example") ArticleExample example);
}