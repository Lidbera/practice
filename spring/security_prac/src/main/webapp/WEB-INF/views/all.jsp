<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>for all</title>
</head>
<body>
<!-- all or member or admin -->
<sec:authorize access="isAnonymous()">
	<a href="/customLogin">�α���</a>
</sec:authorize>
<sec:authorize access="isAuthenticated()">
	<a href="/customLogout">�α׾ƿ�</a>
</sec:authorize>
</body>
</html>