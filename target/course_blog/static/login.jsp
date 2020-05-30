<%--
  Created by IntelliJ IDEA.
  User: 荆轲刺秦王
  Date: 2020/5/30
  Time: 16:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/blog/user/login">
    <table>
        <tr>
            <td>用户名：</td>
            <td><input name="username" type="text"></td>
        </tr>
        <tr>
            <td>密码：</td>
            <td><input type="password" name="password"></td>
        </tr>
        <tr>
            <td><input type="submit" value="登录"></td>
        </tr>
    </table>
</form>
</body>
</html>
