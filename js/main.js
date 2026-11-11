/**
 * R.K. DENTAL CLINIC - MAIN JAVASCRIPT
 * Doctors: Dr. Riddhi Trivedi & Dr. Sarthak Trivedi
 * Phone / WhatsApp: +91 7984138168
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside or clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 2. Set min date for appointment picker to today
  const appDateInput = document.getElementById('appDate');
  if (appDateInput) {
    const today = new Date().toISOString().split('T')[0];
    appDateInput.min = today;
    if (!appDateInput.value) {
      appDateInput.value = today;
    }
  }

  // 3. WhatsApp Appointment Booking Handler
  const appointmentForm = document.getElementById('whatsappAppointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('appName').value.trim();
      const phone = document.getElementById('appPhone').value.trim();
      const doctor = document.getElementById('appDoctor') ? document.getElementById('appDoctor').value : 'Any Available Doctor';
      const branch = document.getElementById('appBranch').value;
      const date = document.getElementById('appDate').value;
      const timeSlot = document.getElementById('appTimeSlot').value;
      const reason = document.getElementById('appReason') ? document.getElementById('appReason').value.trim() : 'General Dental Consultation';

      if (!name || !phone || !branch || !date || !timeSlot) {
        alert('કૃપા કરીને બધી જરૂરી વિગતો ભરો (Please fill in all required fields).');
        return;
      }

      // Build structured WhatsApp message
      const message = 
`🦷 *નવી એપોઇન્ટમેન્ટ / NEW APPOINTMENT REQUEST* 🦷
*R.K. DENTAL CLINIC*
------------------------------------
👤 *દર્દીનું નામ (Patient):* ${name}
📞 *ફોન નંબર (Phone):* ${phone}
👨‍⚕️ *ડોક્ટર (Doctor):* ${doctor}
🏥 *શાખા (Branch):* ${branch}
📅 *તારીખ (Date):* ${date}
⏰ *સમય (Time Slot):* ${timeSlot}
📝 *સમસ્યા / સારવાર (Concern):* ${reason || 'Regular Dental Checkup'}
------------------------------------
_Website મારફતે મોકલેલ એપોઇન્ટમેન્ટ વિનંતી_`;

      const clinicNumber = '917984138168';
      const whatsappUrl = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in new tab / app
      window.open(whatsappUrl, '_blank');
    });
  }
});

/**
 * Helper to trigger instant WhatsApp message with treatment name
 * @param {string} treatmentName 
 */
function bookTreatmentViaWhatsApp(treatmentName) {
  const clinicNumber = '917984138168';
  const text = `નમસ્તે R.K. Dental Clinic! 👋\nહું *${treatmentName}* ની સારવાર માટે એપોઇન્ટમેન્ટ બુક કરવા માંગુ છું.\nકૃપા કરીને મને ઉપલબ્ધ સમય જણાવશો. આભાર!`;
  window.open(`https://wa.me/${clinicNumber}?text=${encodeURIComponent(text)}`, '_blank');
}

/**
 * Helper to trigger instant WhatsApp message for specific branch
 * @param {string} branchName 
 */
function bookBranchViaWhatsApp(branchName) {
  const clinicNumber = '917984138168';
  const text = `નમસ્તે R.K. Dental Clinic! 👋\nહું *${branchName}* ખાતે ડેન્ટલ એપોઇન્ટમેન્ટ લેવા માંગુ છું.\nકૃપા કરીને સમય અને ઉપલબ્ધતા જણાવશો.`;
  window.open(`https://wa.me/${clinicNumber}?text=${encodeURIComponent(text)}`, '_blank');
}
