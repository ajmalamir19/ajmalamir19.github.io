document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('introForm');
    const formResult = document.getElementById('formResult');
    const addCourseButton = document.getElementById('addCourse');
    const resetButton = document.getElementById('resetForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            // Gather form data and replace the form with content
            const formData = new FormData(form);
            const formContent = generateFormContent(formData);
            formResult.innerHTML = formContent;
            form.classList.add('hidden');
            formResult.classList.remove('hidden');
        }
    });

    resetButton.addEventListener('click', function (event) {
        event.preventDefault();
        form.reset();
        formResult.innerHTML = '';
        formResult.classList.add('hidden');
        form.classList.remove('hidden');
    });

    addCourseButton.addEventListener('click', function (event) {
        event.preventDefault();
        addCourseField();
    });

    form.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-course')) {
            event.preventDefault();
            event.target.parentElement.remove();
        }
    });

    function validateForm() {
        // Add validation logic here for each field
        // Display error messages in the respective error spans
        // Return true if the form is valid, false otherwise
        // Example:
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            return false;
        }
        // Add similar validation for other fields
        return true;
    }

    function generateFormContent(formData) {
        // Create and return the content to be displayed after submission
        // Use formData to access form field values
        // Example:
        const name = formData.get('name');
        const mascot = formData.get('mascot');
        const imageCaption = formData.get('imageCaption');
        // Build the content using the form data
        const content = `
            <h3>Welcome to ${name}'s Intro Page!</h3>
            <p>Mascot: ${mascot}</p>
            <p>Image Caption: ${imageCaption}</p>
            <!-- Add content for other fields here -->
        `;
        return content;
    }

    function addCourseField() {
        // Add a new course entry field when the user clicks the "Add Course" button
        const coursesDiv = document.getElementById('courses');
        const courseEntry = document.createElement('div');
        courseEntry.classList.add('course-entry');
        courseEntry.innerHTML = `
            <input type="text" name="course[]" required>
            <button type="button" class="delete-course">Delete</button>
        `;
        coursesDiv.appendChild(courseEntry);
    }
});
