<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process form data here
    $name = $_POST["name"];
    $mascot = $_POST["Mascot"];
    // Add other form fields as needed

    // Generate a new HTML page with the user's input
    $newPageContent = <<<EOD
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://webpages.charlotte.edu/aamir/itis3135/styles.css" rel="stylesheet">
    <title>{$name} | ITIS 3135 Introduction</title>
</head>
<body>
    <div id="page-wrapper" class="container">
        <div data-include="components/header.html"></div>
        <script src="scripts/HTMLInclude.min.js"></script>
        <main>
            <h2>{$name} ITIS 3135 </h2>
            <h2>Introduction</h2>
            <!-- Include content based on user input -->
            <!-- You can use PHP variables here to insert user-provided content -->
            <figure class="figure">
                <img src="https://ajmalamir19.github.io/ajmal.jpg" height="355" width="200" alt="{$name}" >
                <figcaption>{$name}, studying at Atkins Library</figcaption>
            </figure>
            <!-- Include other sections based on user input -->
        </main>
        <div data-include="components/footer.html"></div>
        <script src="scripts/HTMLInclude.min.js"></script>
    </div> <!-- /#page-wrapper -->
</body>
</html>
EOD;

    // Save the generated HTML content to a new file
    $filename = "user_pages/{$name}_intro.html"; // You can customize the file path and naming
    file_put_contents($filename, $newPageContent);

    // Redirect the user to the newly created page
    header("Location: $filename");
    exit;
}
?>
