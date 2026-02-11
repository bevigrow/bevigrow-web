{/* <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/js/intlTelInput.min.js"></script>

<script>
  const phoneInput = document.querySelector("#phone");
  const countrySelect = document.querySelector("#country");
  const phoneError = document.querySelector("#phoneError");
  const phoneE164 = document.querySelector("#phone_e164");

  const iti = window.intlTelInput(phoneInput, {
    initialCountry: "in",
    separateDialCode: true,
    nationalMode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/js/utils.js"
  });

  // Set phone country when user selects a country from dropdown
  countrySelect.addEventListener("change", () => {
    iti.setCountry(countrySelect.value);
    validatePhone();
  });

  // Keep dropdown in sync when user changes flag country
  phoneInput.addEventListener("countrychange", () => {
    countrySelect.value = iti.getSelectedCountryData().iso2;
    validatePhone();
  });

  // Validate on typing
  phoneInput.addEventListener("input", validatePhone);

  function validatePhone() {
    const isValid = iti.isValidNumber();
    if (!phoneInput.value.trim()) {
      phoneError.classList.add("d-none");
      phoneInput.classList.remove("is-invalid");
      return true;
    }

    if (!isValid) {
      phoneError.classList.remove("d-none");
      phoneInput.classList.add("is-invalid");
      phoneE164.value = "";
      return false;
    } else {
      phoneError.classList.add("d-none");
      phoneInput.classList.remove("is-invalid");
      phoneE164.value = iti.getNumber(); // full international number (E.164)
      return true;
    }
  }

  // Block submit if phone invalid
  const form = phoneInput.closest("form");
  form.addEventListener("submit", (e) => {
    if (!validatePhone()) {
      e.preventDefault();
      phoneInput.focus();
    }
  });

  // Set initial dropdown value
  countrySelect.value = "in";
</script> */}
