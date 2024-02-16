
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        var pdf = new jsPDF();
        var formElements = document.querySelectorAll("form input, form select");
        var startY = 10;

        formElements.forEach(function (element) {
            var label = document.querySelector('label[for="' + element.id + '"]');

            if (label) {
                var labelText = label.textContent;
                var value = element.value;
                pdf.text(labelText + ": " + value, 10, startY);
                startY += 10;
            }
        });

        pdf.save("formulario.pdf");
    });
});
