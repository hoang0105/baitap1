<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>anh cuong mai dinh</title>
</head>
<body>
	<%
		String u = request.getParameter("username");
		String p = request.getParameter("password");
		out.println("Username: " + u +"; Password: " + p);
		
	%>

</body>
</html>