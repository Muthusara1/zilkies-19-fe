<!DOCTYPE html>
<html>
<head>
    <title>Employee Application</title>
</head>
<body>

    <h2>Employee Data</h2>

    <form action="savedata" method="GET">
        Name:<br>
        <input type="text" name="fullname" required>
        <br> Designation:
        <br>
        <input type="text" name="designation" required>
        <br> Manager:
        <br>
        <input type="text" name="manager">
        <br>
        <input type="submit" value="Submit">
    </form>
    <a href="printdata">Table View</a>
</body>
</html>