package com.blog.service.impl;

import com.blog.mapper.UserMapper;
import com.blog.pojo.User;
import com.blog.pojo.UserExample;
import com.blog.service.UserService;
import com.blog.utils.CommonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User selectUserByusername(String username) {
        UserExample userExample = new UserExample();
        UserExample.Criteria criteria = userExample.createCriteria();
        criteria.andUsernameEqualTo(username);
        List<User> users = userMapper.selectByExample(userExample);
        return users.get(0);
    }

    @Override
    public void insertUser(User user) {
        user.setPassword(CommonUtil.getCredentials(user.getPassword()));
        userMapper.insert(user);
    }
}
