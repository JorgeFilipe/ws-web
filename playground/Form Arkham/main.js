document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('patient-registration-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real do formulário

        const formData = {
            patientName: form['patient-name'].value,
            birthDate: form['birth-date'].value,
            reason: form['reason'].value,
            emergencyContact: form['emergency-contact'].value
        };

        console.log("Dados do Paciente Admitido:", formData);

        alert('Paciente admitido! Verifique o console para ver os dados.');
        
        form.reset();
    });
});
