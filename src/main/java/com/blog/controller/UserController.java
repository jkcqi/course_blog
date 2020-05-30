package com.blog.controller;

import com.blog.pojo.User;
import com.blog.service.UserService;
import com.blog.shiro.BlogUsernamePasswordToken;
import com.blog.utils.CommonUtil;
import com.blog.utils.R;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/login")
    @ResponseBody
    public Map<String,Object> login(@RequestBody User user){
        BlogUsernamePasswordToken token=null;
        if (user.getRoleid() == 1){
            token=new BlogUsernamePasswordToken(user.getUsername(),user.getPassword(),"user");
        }else if (user.getRoleid() == 2){
            token=new BlogUsernamePasswordToken(user.getUsername(),user.getPassword(),"admin");
        }
        Subject subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
        } catch (UnknownAccountException e) {
            return R.error(e.getMessage());
        }catch (IncorrectCredentialsException e2){
            return R.error("密码不正确");
        }catch (Exception e){
            return R.error("未知错误，请联系管理员");
        }
        return null;
    }

    @RequestMapping("/regist")
    @ResponseBody
    public Map<String,Object> regist(@RequestBody User user){
        user.setPassword(CommonUtil.getCredentials(user.getPassword()));
        userService.insertUser(user);
        return R.ok("注册成功");
    }

    @RequestMapping("/demo")
    @ResponseBody
    public Map<String,Object> demo(){
        User user = userService.selectUserByusername("zkx");
        Map<String, Object> map = new HashMap<>();
        map.put("msg","登录成功");
        map.put("username",user.getUsername());
        map.put("email",user.getEmail());
        map.put("nickname",user.getNickname());
        map.put("id",user.getId());
        return R.ok(map);
    }

}
