<?php

$user = 'root';
$pass = '';
$db = 'musicians';

$db = new mysqli('localhost',$user,$pass,$db) or die("unable to connect");

echo"Great Work!!";

$disp = mysql_query(select name, genre, monthname(`month-year`) from musician inner join performance on musician.musianid=performance.musicianid )


while($result = mysql_fetch_array($disp, MYSQL_ASSOC))
{
	echo"<br/> Name: " . $result['name'];
	echo"<br/> Genre: " . $result['genre'];
	echo"<br/> Date: " . $result['monthname(`month-year`)'];
}

?>
