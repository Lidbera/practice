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
<p>������̸�: <sec:authentication property="principal.member.userName"/></p>
<p>����ھ��̵�: <sec:authentication property="principal.username"/></p>
<p>����� ���� ����Ʈ: <sec:authentication property="principal.member.authList"/></p>

<a href="/customLogout">�α׾ƿ�</a>
</body>
</html>