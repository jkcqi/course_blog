package com.blog.service;

import com.blog.pojo.User;

public interface UserService {

    User selectUserByusername(String username);
    void insertUser(User user);

}
