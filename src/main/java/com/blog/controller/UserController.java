package com.blog.controller;

import com.blog.pojo.User;
import com.blog.service.UserService;
import com.blog.shiro.BlogUsernamePasswordToken;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    public String login(User user){
        return "hello";
    }

    @RequestMapping("/regist")
    public String regist(User user){
        return "login";
    }

}
