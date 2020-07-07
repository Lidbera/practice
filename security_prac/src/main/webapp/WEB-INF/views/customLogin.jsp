<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>커스텀 로그인 페이지</title>
</head>
<body>
<c:out value="${error}"/>
<c:out value="${logout}"/>
<form action="/login" method="post">
	<input type="text" name="username" value="member00">
	<input type="password" name="password" value="pw00">
	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">
	<input type="submit">
</form>
</body>
</html>