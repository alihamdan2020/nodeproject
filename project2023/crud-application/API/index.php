<?php
header("Access-control-Allow-Origin: *");
header("Access-control-Allow-Headers: *");
$con=mysqli_connect("localhost","root","","react-app");

//if($con){
//$user=json_decode(file_get_contents('PHP://input'));
	
	//

$method=$_SERVER['REQUEST_METHOD'];
if($method=='POST'){
			$user=json_decode(file_get_contents('php://input'));
			$query="INSERT INTO users(`id`, `name`, `email`) VALUES (null, '$user->name', '$user->email')";
			mysqli_query($con,$query);

}
else{
			$query="select * from users";
			$result = mysqli_query($con, $query);
			while($row = mysqli_fetch_assoc($result))
			{$arr[] = $row;}
			
			echo json_encode($arr);
}
//else
	




?>