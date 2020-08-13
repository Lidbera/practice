<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>admin page</title>
</head>
<body>
<p>principal: <sec:authentication property="principal"/></p>
<p>memberVO: <sec:authentication property="principal.member"/></p>
<p>사용자이름: <sec:authentication property="principal.member.userName"/></p>
<p>사용자아이디: <sec:authentication property="principal.username"/></p>
<p>사용자 권한 리스트: <sec:authentication property="principal.member.authList"/></p>

<a href="/customLogout">로그아웃</a>
</body>
</html>