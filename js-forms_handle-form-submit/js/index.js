console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
        firstname: form.elements["firstName"].value,
        lastname: form.elements["lastName"].value,
        age: form.elements["age"].value,
        email: form.elements["email"].value,
        complaint: form.elements["complaint"].value,
        details: form.elements["details"].value,
        badness: form.elements["badness"].value,
        orderDate: form.elements["orderDate"].value,
        checkbox: form.elements["tos"].checked,
    }
    console.log(formData);
    event.target.reset();
    form.elements["firstName"].focus();
});

