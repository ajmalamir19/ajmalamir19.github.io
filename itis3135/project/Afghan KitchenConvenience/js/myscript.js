
            // Get the image and overlay elements
            // var image = document.getElementById("zoomImage");
            // var overlay = document.createElement("div");
            // overlay.className = "overlay";
        
            // // Append the overlay to the body
            // document.body.appendChild(overlay);
        
            // // Add a click event to the image
            // image.addEventListener("click", function () {
            //     // Clone the image and append it to the overlay
            //     var zoomedInImage = image.cloneNode(true);
            //     overlay.appendChild(zoomedInImage);
        
            //     // Display the overlay
            //     overlay.style.display = "block";
        
            //     // Add a click event to the overlay to close it
            //     overlay.addEventListener("click", function () {
            //         overlay.style.display = "none";
            //         overlay.innerHTML = ""; // Clear the contents of the overlay
            //     });
            // });
            var image = document.getElementById("zoomImage");

            image.addEventListener("click", function () {
                image.classList.toggle("zoomed");
            });


            var zoomableImages = document.querySelectorAll(".zoomable-image");

            zoomableImages.forEach(function (image) {
                image.addEventListener("click", function () {
                    image.classList.toggle("zoomed");
                });
            });



            const decrementButton = document.getElementById("decrement");
            const incrementButton = document.getElementById("increment");
            const select1 = document.getElementById("select1");
        
            decrementButton.addEventListener("click", function () {
                select1.value = parseInt(select1.value) - 1;
            });
        
            incrementButton.addEventListener("click", function () {
                select1.value = parseInt(select1.value) + 1;
            });
      
