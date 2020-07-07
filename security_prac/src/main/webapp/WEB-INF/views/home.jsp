<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>

<form action="/customLogout" method="post">
	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}">
	<button>·Î±×¾Æ¿ô</button>
</form>

</body>
</html>
