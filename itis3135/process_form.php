<?php
// Database connection parameters
$servername = "Ajmal_Amir"; // Change this to your MySQL server name or IP address
$username = "root@localhost"; // Change this to your MySQL username
$password = "At070077&"; // Change this to your MySQL password
$dbname = "survey_data";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$checkbox_options = implode(", ", $_POST['interests']); // Convert array to a comma-separated string
$radio_option = $_POST['contactMethod'];
$dropdown_option = $_POST['country'];
$comments = $_POST['comments'];

// SQL query to insert data into the table
$sql = "INSERT INTO survey_data (fname, phone, email, interests, contactMethod, country, comments) 
        VALUES ('$name', '$phone', '$email', '$checkbox_options', '$radio_option', '$dropdown_option', '$comments')";

if ($conn->query($sql) === TRUE) {
    echo "Survey data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
