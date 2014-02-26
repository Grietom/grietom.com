<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mail Test</title>
</head>
<body>
	<form action="/main/rest/sendmail" method="POST">
		<input type="text" id="email" name="email">
		<textarea name="message" id="message" cols="30" rows="10"></textarea>
		<input type="submit">
	</form>
</body>
</html>