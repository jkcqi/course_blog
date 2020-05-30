package com.blog.shiro.realm;

import com.blog.pojo.User;
import com.blog.service.UserService;
import com.blog.shiro.BlogUsernamePasswordToken;
import com.blog.utils.CommonUtil;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

public class UserRealm extends AuthorizingRealm {

    @Autowired
    private UserService userService;

    @Override
    public String getName() {
        return "user";
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        BlogUsernamePasswordToken token= (BlogUsernamePasswordToken) authenticationToken;
        User user = userService.selectUserByusername(token.getUsername());
        if (user != null){
            return new SimpleAuthenticationInfo(user.getUsername(),user.getPassword(), ByteSource.Util.bytes(CommonUtil.SALT),this.getName());
        }else {
            throw new UnknownAccountException("用户不存在");
        }
    }
}
