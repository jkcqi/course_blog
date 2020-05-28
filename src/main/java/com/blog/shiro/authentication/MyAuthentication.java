package com.blog.shiro.authentication;

import com.blog.shiro.BlogUsernamePasswordToken;
import com.blog.utils.PatternUtil;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.pam.ModularRealmAuthenticator;
import org.apache.shiro.realm.Realm;

import java.util.ArrayList;
import java.util.Collection;

public class MyAuthentication extends ModularRealmAuthenticator {

    @Override
    protected AuthenticationInfo doAuthenticate(AuthenticationToken authenticationToken) throws AuthenticationException {

        assertRealmsConfigured();
        BlogUsernamePasswordToken token= (BlogUsernamePasswordToken) authenticationToken;
        Collection<Realm> realms = getRealms();
        Collection<Realm> typeCollection=new ArrayList<>();
        if (PatternUtil.isEmail(token.getUsername())){
            for (Realm realm:realms) {
                if (realm.getName().contains("email")){
                    typeCollection.add(realm);
                }
            }
        }else {
            for (Realm realm:realms){
                if (!realm.getName().contains("email")){
                    typeCollection.add(realm);
                }
            }
        }
        if (typeCollection.size() == 1){
            return doSingleRealmAuthentication(typeCollection.iterator().next(),token);
        }else {
            return doMultiRealmAuthentication(typeCollection,token);
        }
    }
}